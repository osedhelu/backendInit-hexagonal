const fs = require('fs')
const { execSync } = require('child_process')
const init = () => {
  // Obtén el nombre del proyecto de los argumentos de la línea de comandos
  const projectName = process.argv[0]
  console.log('TCL: projectName', projectName)

  // Verifica que el nombre del proyecto se ha proporcionado
  if (!projectName) {
    console.error('Por favor proporciona un nombre para el proyecto')
    process.exit(1)
  }

  // Crea el directorio del proyecto
  fs.mkdirSync(projectName)

  // Clona el repositorio de la plantilla de proyecto en el directorio del proyecto
  execSync(
    `git clone https://github.com/osedhelu/backendInit-hexagonal.git ${projectName}`
  )

  // Cambia al directorio del proyecto
  process.chdir(projectName)

  // Instala las dependencias del proyecto
  execSync('npm install')

  console.log(`¡Proyecto ${projectName} creado exitosamente!`)
}

module.exports = {
  init
}
