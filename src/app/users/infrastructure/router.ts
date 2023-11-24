import container from '@/ioc.repository'
import { Elysia } from 'elysia'
import { usersCtrl } from './controllers/users.ctrl'

export default (app: Elysia) => {
  const usersCtrl: usersCtrl = container.get('users.ctrl')
  app.get('/', usersCtrl.testCtrl, {
    detail: {
      tags: ['users']
    }
  })
}
