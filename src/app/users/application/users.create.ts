import UsersRepositoryImpl from '../domain/usersRepositoryImpl'
import { UsersRepository } from '../infrastructure/repository/users.repository'

export class UsersCreate {
  private repositoryImpl: UsersRepositoryImpl
  constructor (respositories: [UsersRepository]) {
    const [usersRepository] = respositories
    this.repositoryImpl = usersRepository
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

