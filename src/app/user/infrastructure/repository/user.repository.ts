import userRepositoryImpl from '@/app/user/domain/userRepositoryImpl'

export class UserRepository implements userRepositoryImpl  {
  test ({
    ok
  }: {
    ok: boolean
  }): any {
    return {ok} 
  }
}

