#!/usr/bin/env node


'use strict'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';
import { packageTemplate } from './template/packageTemplate.mjs'
const file = [
  "./env.d.ts",
  "./.gitignore",
  "./tsconfig.json",
  ".env.example"
]
let args = process.argv.splice(2)
let projectName = args[0]
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dirOrigin = path.resolve(__dirname, '../');
const pathRoot = path.join(projectName, '.');
const copyFile = (namefile) => {
  const originPath = path.join(dirOrigin, namefile);
  const destPath = path.join(pathRoot, namefile);
  fs.copyFileSync(originPath, destPath);

}

const createFileTemplate = (pathFile, template) => {
  fs.writeFile(pathFile, template, (err) => {
    if (err) {
      console.error('Error al crear el archivo package.json:', err);
      process.exit(1);
    }

    console.log(`¡Proyecto ${projectName} creado exitosamente!`);
  });
}




if (!projectName) {
  console.error('Por favor proporciona un nombre para el proyecto')
  process.exit(1)
}


fs.mkdirSync(projectName)
const templatePackage = packageTemplate(projectName);

createFileTemplate(`${pathRoot}/package.json`, templatePackage)


// teniendo en cuenta 
const items = fs.readdirSync(dirOrigin);
console.log("TCL: items", items)
copyFile('.env.example')


// Obtiene los items del directorio original

// Copia los archivos y directorios al directorio del proyecto
