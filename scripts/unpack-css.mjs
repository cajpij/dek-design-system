// node scripts/unpack-css.mjs <cesta k dek-css-dump.json>
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

const [, , file] = process.argv
if (!file) throw new Error('Chybí cesta k dek-css-dump.json')
const dump = JSON.parse(readFileSync(file, 'utf8'))
const out = 'src/vendor/dek.cz'
mkdirSync(join(out, 'vue'), { recursive: true })
for (const [url, css] of Object.entries(dump)) {
  const name = url.split('/').pop().split('?')[0]
  const target = url.includes('/vue-') ? join(out, 'vue', name) : join(out, name)
  writeFileSync(target, css)
  console.log(target, css.length)
}
