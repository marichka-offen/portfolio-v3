import { unlink, readdir, stat } from 'fs/promises'
import { join } from 'path'
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
        } else if (file.endsWith('.png') && !file.includes('og-image')) {
            fileList.push(filePath)
        }
    }

    return fileList
}

async function main() {
    console.log('🗑️  Finding PNG files to clean up...\n')
    const pngFiles = await getAllPngFiles(publicDir)

    console.log(`Found ${pngFiles.length} PNG files to remove (keeping og-image.png)\n`)

    for (const file of pngFiles) {
        try {
            await unlink(file)
            console.log(`✓ Deleted: ${file.replace(publicDir, '')}`)
        } catch (error) {
            console.error(`✗ Failed to delete ${file}:`, error.message)
        }
    }

    console.log(`\n✨ Cleanup complete! Removed ${pngFiles.length} PNG files`)
    console.log(`   Kept: /og-image.png (for social media compatibility)`)
}

main().catch(console.error)
