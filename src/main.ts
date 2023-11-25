import { Elysia } from 'elysia'
import { swagger } from '@elysiajs/swagger'
import { watchDirecrory } from './utils/service-dir-arq-hexagonal'
const PORT = Bun.env.PORT || 3000

const app = new Elysia().use(swagger())
const dirH = await watchDirecrory('app')
app.group('/v1', xxRo => {
  dirH.forEach(rep => {
    const router = require(`./app/${rep.origin}/${rep.url[1]}/router.ts`)
    xxRo.group(rep.origin, ds => {
      console.log(`${rep.origin}`)
      router.default(ds)
      return ds
    })
  })
  return xxRo
})
app.listen(PORT)
console.log(`🦊 Elysia is running at on port ${PORT}`)

// // src/user/main.ts
