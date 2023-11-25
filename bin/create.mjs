#!/usr/bin/env node
const fs = require('fs')
const simpleGit = require('simple-git')
const { execSync } = require('child_process')
const ProgressBar = require('progress')

const init = async () => {
  // Obtén el nombre del proyecto de los argumentos de la línea de comandos
  const projectName = process.argv[1]
  console.log('TCL: projectName', projectName)

  // Verifica que el nombre del proyecto se ha proporcionado
  if (!projectName) {
    console.error('Por favor proporciona un nombre para el proyecto')
    process.exit(1)
  }

  // Crea el directorio del proyecto
  fs.mkdirSync(projectName)

  // Clona el repositorio de la plantilla de proyecto en el directorio del proyecto
  const git = simpleGit()
  const clonePromise = git.clone(
    'https://github.com/osedhelu/backendInit-hexagonal.git',
    projectName
  )

  clonePromise.progress(progress => {
    if (progress.total) {
      const bar = new ProgressBar('Cloning [:bar] :percent :etas', {
        complete: '=',
        incomplete: ' ',
        width: 20,
        total: progress.total
      })

      bar.tick(progress.loaded)
    }
  })

  await clonePromise

  // Cambia al directorio del proyecto
  process.chdir(projectName)

  // Instala las dependencias del proyecto
  const bar = new ProgressBar('Installing [:bar] :percent :etas', {
    complete: '=',
    incomplete: ' ',
    width: 20,
    total: 100
  })

  const install = execSync('npm install')

  install.stdout.on('data', data => {
    const match = data.toString().match(/(\d+)\%/)
    if (match) {
      const percent = parseInt(match[0], 10)
      bar.tick(percent)
    }
  })

  console.log(`¡Proyecto ${projectName} creado exitosamente!`)
}

module.exports = { init }
