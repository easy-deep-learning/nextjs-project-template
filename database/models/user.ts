import mongoose from 'mongoose'

/**
 * @see https://next-auth.js.org/adapters/mongodb
 */
const Schema = new mongoose.Schema({
  name: String,
  email: String,
  image: String,
  emailVerified: Boolean
})

const UserModel = mongoose.models.User || mongoose.model('User', Schema)

export default UserModel
