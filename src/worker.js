import { createClient } from 'redis'

async function main() {
   const client = await createClient()
      .on('error', (error) => console.log(error))
      .connect()
   
   console.log('Worker started')
   
   await client.subscribe('users', (message) => {
      console.log('Message: ', message)

      const payload = JSON.parse(message)
      
      setTimeout(() => {
         console.log(`Mail sent to ${payload.mail}`)
      }, 3000)
   })
}

main()