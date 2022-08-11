#!/usr/bin/env zx
import 'zx/globals'

const mincuDeps = Object.keys(fs.readJSONSync('package.json').devDependencies).filter(dep => dep.startsWith('mincu'))

// Generate API docs for each mincu dependency

const dir = "docs"

await $`rm -rf ${dir}`

const generate = async (dep) => {
  fs.writeFileSync('./index.ts', `export * from '${dep}'`)
  await $`mkdir -p ${dir}/${dep}`
  await $`pnpm typedoc --plugin typedoc-plugin-markdown --out ${dir}/${dep} index.ts --name ${dep} --disableSources --readme none --githubPages false --hideInPageTOC true --hideBreadcrumbs true`
}

for (const dep of mincuDeps) {
  await generate(dep)
}

const toRenameReadme = await glob(`${dir}/**/README.md`)

for (const file of toRenameReadme) {
  fs.renameSync(file, file.replace(/README\.md$/, 'index.md'))
}

const towrite = await glob(`${dir}/**/*.md`)

towrite.forEach(file => {
  const content = fs.readFileSync(file)
  const out = content.toString().replace(/\.md/g, '').replace(/README\.md/g, '')
  fs.writeFileSync(file, out)
})

// concat markdown files
import concatMd from '@kuss/concat-md'

fs.ensureDirSync(`../pages/apis/`)

for (const dep of mincuDeps) {
  const out = await concatMd.default(`${dir}/${dep}`, {
    decreaseTitleLevels: true,
    dirNameAsTitle: true,
    sorter: () => 0
  })

  const final = out
    .replace(/<!--.+-->\n/gm, '')
    .replace(/<a name=.+a>\n/gm, '')
    .replace(/</g, '\\<')
    .replace(/{/g, '\\{')
  
  fs.writeFileSync(`../pages/apis/${dep}.md`, final)
}

await $`rm index.ts`

// generate apis/meta.json

const meta = {}

for (const dep of mincuDeps) {
  meta[dep] = dep
}

fs.writeJSONSync(`../pages/apis/meta.json`, meta, {
  spaces: 2
})