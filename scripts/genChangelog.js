const fs = require('fs')
const path = require('path')
const cc = require('conventional-changelog')

if (process.argv[2] === 'run') {
  const version = require('../lerna.json').version
  const file = path.resolve(__dirname, '../CHANGELOG.md')
  const fileStream = fs.createWriteStream(file)

  cc({
    preset: 'angular',
    releaseCount: 2,
    pkg: {
      transform (pkg) {
        pkg.version = `v${version}`
        return pkg
      }
    }
  }).pipe(fileStream).on('close', () => {
    console.log(`Generated release note at ${file}`)
  })
}
