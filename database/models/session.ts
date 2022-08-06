import mongoose from 'mongoose'

/**
 * @see https://next-auth.js.org/adapters/mongodb
 */
const Schema = new mongoose.Schema({
  sessionToken: String,
  userId: mongoose.Types.ObjectId,
  expires: Date
})

const SessionModel = mongoose.models.Session || mongoose.model('Session', Schema)

export default SessionModel
