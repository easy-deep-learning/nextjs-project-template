import mongoose from 'mongoose'

/**
 * @see https://next-auth.js.org/adapters/mongodb
 */
const Schema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  sessionToken: String,
  userId: mongoose.Types.ObjectId,
  expires: Date
})

const SessionModel = mongoose.models.SessionModel || mongoose.model('Session', Schema)

export default SessionModel
