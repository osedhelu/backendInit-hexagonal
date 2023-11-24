export const Routerjs = (name: string) => {
  return `import container from '@/ioc.repository'
import { Elysia } from 'elysia'
import { ${name}Ctrl } from './controllers/${name}.ctrl'

export default (app: Elysia) => {
  const ${name}Ctrl: ${name}Ctrl = container.get('${name}.ctrl')
  app.get('/', ${name}Ctrl.testCtrl, {
    detail: {
      tags: ['${name}']
    }
  })
}
`
}
