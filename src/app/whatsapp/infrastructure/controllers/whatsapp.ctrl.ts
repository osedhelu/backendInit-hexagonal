import { WhatsappCreate } from '@/app/whatsapp/application/whatsapp.create'

export class whatsappCtrl {
  constructor (private readonly whatsappCreator: WhatsappCreate) {}
  public testCtrl = async (data: any) => {
    return this.whatsappCreator.handle({ok: true})
  }
}

