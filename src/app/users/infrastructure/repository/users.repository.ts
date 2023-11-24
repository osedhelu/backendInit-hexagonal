import usersRepositoryImpl from '@/app/users/domain/usersRepositoryImpl'

export class UsersRepository implements usersRepositoryImpl  {
  test ({
    ok
  }: {
    ok: boolean
  }): any {
    return {ok} 
  }
}

