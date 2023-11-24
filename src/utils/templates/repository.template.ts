import { upperCase } from '../text.utils'

export const RepositoryTemplate = (
  name: string
) => `import ${name}RepositoryImpl from '@/app/${name}/domain/${name}RepositoryImpl'

export class ${upperCase(name)}Repository implements ${name}RepositoryImpl  {
  test ({
    ok
  }: {
    ok: boolean
  }): any {
    return {ok} 
  }
}

`
