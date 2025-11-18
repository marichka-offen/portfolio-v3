import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const iconsDir = path.resolve(__dirname, '../src/assets/icons')
const outputFile = path.resolve(__dirname, '../src/styles/utilities/_icons.scss')

const files = fs.readdirSync(iconsDir).filter(file => file.endsWith('.svg'))

let scss = `// AUTO-GENERATED FILE — do not edit manually
.icon {
  display: inline-block;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 300px;
  height: 300px;
}
`

files.forEach(file => {
  const name = path.basename(file, '.svg')
  scss += `
.icon.${name} {
    background-image: url('../../assets/icons/${file}');
}\n`
})

fs.writeFileSync(outputFile, scss)
console.log(`✅ Generated ${files.length} icon classes in _icons.scss`)
