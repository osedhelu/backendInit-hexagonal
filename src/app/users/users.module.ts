import { ContainerBuilder } from 'node-dependency-injection'
import { UsersRepository } from './infrastructure/repository/users.repository'
import { UsersCreate } from './application/users.create'
import { usersCtrl } from './infrastructure/controllers/users.ctrl'

export const UsersModule = (container: ContainerBuilder): ContainerBuilder => {
  container.register('users.repository', UsersRepository)
  const UsersRepo = container.get('users.repository')

  container.register('users.creator', UsersCreate).addArgument([UsersRepo])
  const usersCreator = container.get('users.creator')

  container.register('users.ctrl', usersCtrl).addArgument(usersCreator)
  return container
}
