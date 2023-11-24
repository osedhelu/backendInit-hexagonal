import { upperCase } from '../text.utils'

export const repositoryImplTemplate = (name: string) => `export default interface ${upperCase(
  name
)}RepositoryImpl {
    test({ ok }: { ok: boolean }): any 
  }
  

`
