const { init } = require('./create')
const currentNodeVersion = process.versions.node
const semver = currentNodeVersion.split('.')

const major = semver[0]
console.log('TCL: major', major)

if (major < 14) {
  console.error(
    'You are running Node ' +
      currentNodeVersion +
      '.\n' +
      'Create React App requires Node 14 or higher. \n' +
      'Please update your version of Node.'
  )
  process.exit(1)
}

init()
