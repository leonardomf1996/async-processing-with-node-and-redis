import express from 'express'
import { createClient } from 'redis'
import crypto from 'node:crypto'

const app = express()

app.use(express.json())

const client = await createClient()
   .on('error', (error) => console.log(error))
   .connect()

app.get('/ping', (request, response) => {
   response.send('pong')
})

app.post('/cadastro', async (request, response) => {
   const { name, mail, pass } = request.body

   const user = {
      id: crypto.randomInt(99999),
      name,
      mail,
      pass
   }

   const payload = JSON.stringify(user)

   await client.publish('users', payload)   

   return response.json(user)
})

app.listen(3000, () => {
   console.log('Server running on port 3000')
})