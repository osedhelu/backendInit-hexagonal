import { upperCase } from '../text.utils'

export const ModuleTemplte = (
  name: string
) => `import { ContainerBuilder } from 'node-dependency-injection'
import { ${upperCase(
  name
)}Repository } from './infrastructure/repository/${name}.repository'
import { ${upperCase(name)}Create } from './application/${name}.create'
import { ${name}Ctrl } from './infrastructure/controllers/${name}.ctrl'

export const ${upperCase(
  name
)}Module = (container: ContainerBuilder): ContainerBuilder => {
  container.register('${name}.repository', ${upperCase(name)}Repository)
  const ${upperCase(name)}Repo = container.get('${name}.repository')

  container.register('${name}.creator', ${upperCase(
  name
)}Create).addArgument([${upperCase(name)}Repo])
  const ${name}Creator = container.get('${name}.creator')

  container.register('${name}.ctrl', ${name}Ctrl).addArgument(${name}Creator)
  return container
}
`
