import { ContainerBuilder } from 'node-dependency-injection'
import { UserRepository } from './infrastructure/repository/user.repository'
import { UserCreate } from './application/user.create'
import { userCtrl } from './infrastructure/controllers/user.ctrl'

export const UserModule = (container: ContainerBuilder): ContainerBuilder => {
  container.register('user.repository', UserRepository)
  const UserRepo = container.get('user.repository')

  container.register('user.creator', UserCreate).addArgument([UserRepo])
  const userCreator = container.get('user.creator')

  container.register('user.ctrl', userCtrl).addArgument(userCreator)
  return container
}
