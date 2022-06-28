import mongoose, { ConnectOptions } from 'mongoose'

const { MONGODB_URI = '', MONGODB_DB } = process.env

if (MONGODB_URI === '') {
  throw new Error(
    'Please define the MONGODB_URI environment variable',
  )
}

if (!MONGODB_DB) {
  throw new Error(
    'Please define the MONGODB_DB environment variable',
  )
}

/**
 * @see https://mongoosejs.com/docs/index.html
 */

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 * @todo: types
 */
let cached: { promise: Promise<any> | null, connection: any } = { connection: null, promise: null }

export default async function dbConnect () {
  if (cached.connection) {
    return cached.connection
  }

  if (!cached.promise) {
    /**
     * @see https://mongoosejs.com/docs/connections.html
     * @see http://mongodb.github.io/node-mongodb-native/2.2/api/MongoClient.html#connect
     * ConnectOptions
     */
    const options: ConnectOptions = {}

    cached.promise = mongoose
      .connect(MONGODB_URI, options)
      .then((mongoose) => mongoose)
      .catch((error) => console.error(error))
  }
  cached.connection = await cached.promise
  return cached.connection
}
