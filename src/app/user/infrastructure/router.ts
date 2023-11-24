import container from '@/ioc.repository'
import { Elysia } from 'elysia'
import { userCtrl } from './controllers/user.ctrl'

export default (app: Elysia) => {
  const userCtrl: userCtrl = container.get('user.ctrl')
  app.get('/', userCtrl.testCtrl, {
    detail: {
      tags: ['user']
    }
  })
}
