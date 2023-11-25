import { ContainerBuilder } from 'node-dependency-injection'
import { UserModule } from './app/user/user.module'
import { WhatsappModule } from './app/whatsapp/whatsapp.module'

let container = new ContainerBuilder()
UserModule(container)
WhatsappModule(container)

export default container
