import express from 'express'
import setupMiddelewares from '@/main/config/middlewares'
import setupRoutes from '@/main/config/routes'

const app = express()

setupMiddelewares(app)
setupRoutes(app)

export default app
