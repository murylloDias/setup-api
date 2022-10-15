import { Express } from 'express'
import { bodyParser, contentType, cors, morganLogger } from '@/main/middlewares'

export default (app: Express): void => {
  app.use(cors)
  app.use(bodyParser)
  app.use(contentType)
  app.use(morganLogger)
}
