#!/usr/bin/env node

'use strict'

process.title = 'mime'
const pkg = await import('../package.json', {
  assert: {
    type: 'json'
  }
})

console.log('TCL: pkg', pkg)
let args = process.argv.splice(2)

if (args.includes('--version') || args.includes('-v') || args.includes('--v')) {
  console.log(pkg.version)
  process.exit(0)
} else if (
  args.includes('--name') ||
  args.includes('-n') ||
  args.includes('--n')
) {
  console.log(pkg.name)
  process.exit(0)
} else if (
  args.includes('--help') ||
  args.includes('-h') ||
  args.includes('--h')
) {
  console.log(pkg.name + ' - ' + pkg.description + '\n')
  console.log(`Usage:

 mime [flags] [path_or_extension]

 Flags:
   --help, -h                   Show this message
   --version, -v                Display the version
   --name, -n                   Print the name of the program

 Note: the command will exit after it executes if a command is specified
 The path_or_extension is the path to the file or the extension of the file.

 Examples:
   mime --help
   mime --version
   mime --name
   mime -v
   mime src/log.js
   mime new.py
   mime foo.sh
 `)
  process.exit(0)
}

let projectName = args[0]
if (!projectName) {
  console.error('Por favor proporciona un nombre para el proyecto')
  process.exit(1)
}

// Crea el directorio del proyecto
fs.mkdirSync(projectName)

const git = simpleGit()
const clonePromise = git.clone(
  'https://github.com/osedhelu/backendInit-hexagonal.git',
  projectName
)
