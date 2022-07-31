import mongoose from 'mongoose'

/**
 * @see https://next-auth.js.org/adapters/mongodb
 */
const Schema = new mongoose.Schema({
  provider: String,
  type: String,
  providerAccountId: String,
  access_token: String,
  token_type: String,
  scope: String,
  userId: mongoose.Types.ObjectId
})

const AccountModel = mongoose.models.AccountModel || mongoose.model('Account', Schema)

export default AccountModel
