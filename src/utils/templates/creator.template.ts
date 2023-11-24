import { upperCase } from '../text.utils'

export const CreatorTemplate = (name: string) => `import ${upperCase(
  name
)}RepositoryImpl from '../domain/${name}RepositoryImpl'
import { ${upperCase(
  name
)}Repository } from '../infrastructure/repository/${name}.repository'

export class ${upperCase(name)}Create {
  private repositoryImpl: ${upperCase(name)}RepositoryImpl
  constructor (respositories: [${upperCase(name)}Repository]) {
    const [${name}Repository] = respositories
    this.repositoryImpl = ${name}Repository
  }
  public handle({
    ok
  }: {
    ok: boolean
  }) {
    const responseExSave = this.repositoryImpl.test({ ok }) //TODO enviar a ws
    return {
      responseExSave
    }
  }
}

`
