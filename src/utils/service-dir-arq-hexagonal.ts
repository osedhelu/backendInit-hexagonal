import * as fs from 'node:fs'
import * as path from 'node:path'
import { Routerjs } from './templates/router.tmp'
import { CtrolTemplate } from './templates/ctrl.template'
import { CreatorTemplate } from './templates/creator.template'
import { repositoryImplTemplate } from './templates/repositoryImpl.template'
import { RepositoryTemplate } from './templates/repository.template'
import { ModuleTemplte } from './templates/module.template'

const arpCarpetas = ['application', 'infrastructure', 'domain']

const createRouterInfra = async (dir: string, templateString: string) => {
  if (!fs.existsSync(dir)) {
    try {
      await fs.promises.writeFile(dir, templateString)
      console.log('Archivo creado exitosamente')
    } catch (err) {
      console.error('Hubo un error al crear el archivo:', err)
    }
  } else {
    console.log('El archivo ya existe')
  }
}

const crearDirectorioSiNoExiste = (ruta: string) => {
  if (!fs.existsSync(ruta)) {
    fs.mkdirSync(ruta)
  }
}

export interface iDirAction {
  origin: string
  url: string[]
}

const listarDirectorios = (ruta: string): iDirAction[] => {
  const contenido = fs.readdirSync(ruta)
  const directorios = contenido.filter(nombre =>
    fs.statSync(`${ruta}/${nombre}`).isDirectory()
  )

  arpCarpetas.forEach(carpe => {
    directorios.forEach(element => {
      const xruta = path.join(ruta, element, carpe)
      crearDirectorioSiNoExiste(xruta)
    })
  })

  const arqHexagonal = directorios.map(p => {
    return {
      origin: p,
      url: fs
        .readdirSync(`${ruta}/${p}`)
        .filter(rmp => fs.statSync(`${ruta}/${p}/${rmp}`).isDirectory())
    }
  })

  return arqHexagonal
}

export const watchDirecrory = async (dir: string): Promise<iDirAction[]> => {
  const urls = path.join('src', dir)
  fs.watch(urls, async (__, filename) => {
    const listDirs = listarDirectorios(urls)
    for (let i = 0; i < listDirs.length; i++) {
      const element = listDirs[i]
      const pathDomain = `${urls}/${element.origin}/${element.url[2]}`
      const pathInfra = `${urls}/${element.origin}/${element.url[1]}`
      const pathApplication = `${urls}/${element.origin}/${element.url[0]}`
      const pathRoot = `${urls}/${element.origin}`

      await createRouterInfra(
        `${pathRoot}/${element.origin}.module.ts`,
        ModuleTemplte(element.origin)
      )

      await createRouterInfra(
        `${pathDomain}/${element.origin}RepositoryImpl.ts`,
        repositoryImplTemplate(element.origin)
      )
      await createRouterInfra(
        `${pathInfra}/router.ts`,
        Routerjs(element.origin)
      )
      await createRouterInfra(
        `${pathApplication}/${element.origin}.create.ts`,
        CreatorTemplate(element.origin)
      )

      const pathController = `${pathInfra}/controllers`
      crearDirectorioSiNoExiste(pathController)
      await createRouterInfra(
        `${pathController}/${element.origin}.ctrl.ts`,
        CtrolTemplate(element.origin)
      )

      const pathRepository = `${pathInfra}/repository`
      crearDirectorioSiNoExiste(pathRepository)
      await createRouterInfra(
        `${pathRepository}/${element.origin}.repository.ts`,
        RepositoryTemplate(element.origin)
      )
    }
    console.log(`Actualizastes el directorio ${filename}`)
  })
  return listarDirectorios(urls)
}
