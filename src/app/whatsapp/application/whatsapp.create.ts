import WhatsappRepositoryImpl from '../domain/whatsappRepositoryImpl'
import { WhatsappRepository } from '../infrastructure/repository/whatsapp.repository'

export class WhatsappCreate {
  private repositoryImpl: WhatsappRepositoryImpl
  constructor (respositories: [WhatsappRepository]) {
    const [whatsappRepository] = respositories
    this.repositoryImpl = whatsappRepository
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

