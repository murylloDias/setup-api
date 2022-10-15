import { HttpResponse } from '@/presentation/protocols'
import { ServerError } from '@/presentation/errors'

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const created = (data: any): HttpResponse => ({
  statusCode: 201,
  body: data
})

export const badRequest = (erro: Error): HttpResponse => ({
  statusCode: 400,
  body: erro
})

export const notFound = (): HttpResponse => ({
  statusCode: 404,
  body: {}
})

export const tooManyRequest = (error: Error): HttpResponse => ({
  statusCode: 429,
  body: error
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack)
})

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: error
})

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null
})
