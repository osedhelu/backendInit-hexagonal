import { upperCase } from '../text.utils'

export const CtrolTemplate = (name: string) => `import { ${upperCase(
  name
)}Create } from '@/app/${name}/application/${name}.create'

export class ${name}Ctrl {
  constructor (private readonly ${name}Creator: ${upperCase(name)}Create) {}
  public testCtrl = async (data: any) => {
    return this.${name}Creator.handle({ok: true})
  }
}

`
