import sharp from 'sharp'
import { readdir, stat } from 'fs/promises'
import { join, parse } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const publicDir = join(__dirname, '../public')

async function getAllPngFiles(dir, fileList = []) {
    const files = await readdir(dir)

    for (const file of files) {
        const filePath = join(dir, file)
        const fileStat = await stat(filePath)

        if (fileStat.isDirectory()) {
            await getAllPngFiles(filePath, fileList)
        } else if (file.endsWith('.png')) {
            fileList.push(filePath)
        }
    }

    return fileList
}

async function convertToWebp(pngPath) {
    const { dir, name } = parse(pngPath)
    const webpPath = join(dir, `${name}.webp`)

    try {
        await sharp(pngPath)
            .webp({ quality: 85, effort: 6 })
            .toFile(webpPath)

        console.log(`✓ Converted: ${pngPath.replace(publicDir, '')} → ${webpPath.replace(publicDir, '')}`)
        return webpPath
    } catch (error) {
        console.error(`✗ Failed to convert ${pngPath}:`, error.message)
        return null
    }
}

async function main() {
    console.log('🔍 Finding all PNG images...\n')
    const pngFiles = await getAllPngFiles(publicDir)

    console.log(`Found ${pngFiles.length} PNG files\n`)
    console.log('🔄 Converting to WebP...\n')

    const results = await Promise.all(pngFiles.map(convertToWebp))
    const successful = results.filter(r => r !== null).length

    console.log(`\n✨ Conversion complete!`)
    console.log(`   Success: ${successful}/${pngFiles.length} files`)
    console.log(`\n💡 Next steps:`)
    console.log(`   1. Update image references in your code`)
    console.log(`   2. Test that images load correctly`)
    console.log(`   3. Delete original PNG files if everything works`)
}

main().catch(console.error)
