import UserRepositoryImpl from '../domain/userRepositoryImpl'
import { UserRepository } from '../infrastructure/repository/user.repository'

export class UserCreate {
  private repositoryImpl: UserRepositoryImpl
  constructor (respositories: [UserRepository]) {
    const [userRepository] = respositories
    this.repositoryImpl = userRepository
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

