import { ContainerBuilder } from 'node-dependency-injection'
import { UsersModule } from './app/users/users.module'
import { WhatsappModule } from './app/whatsapp/whatsapp.module'

let container = new ContainerBuilder()
WhatsappModule(container)
UsersModule(container)

export default container
