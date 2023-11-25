import whatsappRepositoryImpl from '@/app/whatsapp/domain/whatsappRepositoryImpl'

export class WhatsappRepository implements whatsappRepositoryImpl {
  constructor () {
    console.log('init Project')
  }
  test ({ ok }: { ok: boolean }): any {
    return { ok }
  }
}
