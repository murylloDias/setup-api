import 'module-alias/register'
import 'dotenv/config'
import app from '@/main/config/app'
import env from '@/main/config/env'
import { MongooseHelper } from '@/infra/db/mongoDb'

MongooseHelper.connect(env.mongoUrl).then(async () => {
  app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
}).catch(console.error)
