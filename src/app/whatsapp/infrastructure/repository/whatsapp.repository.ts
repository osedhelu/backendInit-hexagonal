import whatsappRepositoryImpl from '@/app/whatsapp/domain/whatsappRepositoryImpl'

export class WhatsappRepository implements whatsappRepositoryImpl  {
  test ({
    ok
  }: {
    ok: boolean
  }): any {
    return {ok} 
  }
}

