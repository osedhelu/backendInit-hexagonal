import { UsersCreate } from '@/app/users/application/users.create'

export class usersCtrl {
  constructor (private readonly usersCreator: UsersCreate) {}
  public testCtrl = async (data: any) => {
    return this.usersCreator.handle({ok: true})
  }
}

