// Spustit v konzoli prohlížeče na https://www.dek.cz — stáhne dek-css-dump.json
// se všemi stylesheety webu. Pak: node scripts/unpack-css.mjs ~/Downloads/dek-css-dump.json
;(async () => {
  const urls = [...document.querySelectorAll('link[rel=stylesheet]')].map((l) => l.href).filter((h) => h.includes('dek.cz'))
  const out = {}
  for (const u of urls) out[u] = await fetch(u).then((r) => r.text())
  const blob = new Blob([JSON.stringify(out)], { type: 'application/octet-stream' })
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = 'dek-css-dump.json'
  document.body.appendChild(a)
  a.click()
})()
