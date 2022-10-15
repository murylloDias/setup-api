import mongoose, { Mongoose } from 'mongoose'

export const MongooseHelper = {
  client: null as unknown as Mongoose,

  async connect (uri: string): Promise<void> {
    this.client = await mongoose.connect(uri)
  },

  async disconnect (): Promise<void> {
    await this.client.disconnect()
  },

  map: (data: any): any => {
    if (data) {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const { _id, __v, ...obj } = data
      return Object.assign({}, obj, { id: _id })
    }
  }
}
