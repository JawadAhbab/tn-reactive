const typescript = require('rollup-plugin-typescript2')
const { getBabelOutputPlugin } = require('@rollup/plugin-babel')
const fs = require('fs')
const pkg = require('./package.json')

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
]
const tsplug = function (declaration = false) {
  return typescript({
    useTsconfigDeclarationDir: declaration,
    tsconfigOverride: { compilerOptions: { declaration } },
  })
}
const babelplug = function (runtime = true, esm = true) {
  return getBabelOutputPlugin({
    presets: ['@babel/preset-env'],
    plugins: runtime
      ? [['@babel/plugin-transform-runtime', { useESModules: esm, version: '7.19.6' }]]
      : [],
  })
}

const hooks = fs.readdirSync('./src/hooks/').map(file => [
  {
    input: `./src/hooks/${file}`,
    external,
    output: { file: `dist/hooks/${file.replace(/\.ts$/g, '.cjs')}`, format: 'cjs' },
    plugins: [tsplug(), babelplug(true, false)],
  },
  {
    input: `./src/hooks/${file}`,
    external,
    output: { file: `dist/hooks/${file.replace(/\.ts$/g, '.mjs')}`, format: 'esm' },
    plugins: [tsplug(), babelplug()],
  },
])

module.exports = [
  {
    input: './src/index.ts',
    external,
    output: { file: 'dist/index.cjs', format: 'cjs' },
    plugins: [tsplug(true), babelplug(true, false)],
  },
  {
    input: './src/index.ts',
    external,
    output: { file: 'dist/index.mjs', format: 'esm' },
    plugins: [tsplug(true), babelplug()],
  },
  ...hooks.flat(),
]
