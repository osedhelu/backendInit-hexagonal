import { ContainerBuilder } from 'node-dependency-injection'
import { WhatsappRepository } from './infrastructure/repository/whatsapp.repository'
import { WhatsappCreate } from './application/whatsapp.create'
import { whatsappCtrl } from './infrastructure/controllers/whatsapp.ctrl'

export const WhatsappModule = (container: ContainerBuilder): ContainerBuilder => {
  container.register('whatsapp.repository', WhatsappRepository)
  const WhatsappRepo = container.get('whatsapp.repository')

  container.register('whatsapp.creator', WhatsappCreate).addArgument([WhatsappRepo])
  const whatsappCreator = container.get('whatsapp.creator')

  container.register('whatsapp.ctrl', whatsappCtrl).addArgument(whatsappCreator)
  return container
}
