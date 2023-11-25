import container from '@/ioc.repository'
import { Elysia } from 'elysia'
import { whatsappCtrl } from './controllers/whatsapp.ctrl'

export default (app: Elysia) => {
  const whatsappCtrl: whatsappCtrl = container.get('whatsapp.ctrl')
  app.get('/', whatsappCtrl.testCtrl, {
    detail: {
      tags: ['whatsapp']
    }
  })
}
