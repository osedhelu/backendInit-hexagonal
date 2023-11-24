import { UserCreate } from '@/app/user/application/user.create'

export class userCtrl {
  constructor (private readonly userCreator: UserCreate) {}
  public testCtrl = async (data: any) => {
    return this.userCreator.handle({ok: true})
  }
}

