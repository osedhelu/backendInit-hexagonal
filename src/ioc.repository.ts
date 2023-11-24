import { ContainerBuilder } from 'node-dependency-injection'
import { UserModule } from './app/user/user.module'

let container = new ContainerBuilder()
UserModule(container)

export default container
