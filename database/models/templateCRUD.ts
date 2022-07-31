import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
  author: mongoose.Types.ObjectId,
  created_at: Date,
  updated_at: Date,
  title: String,
  text: String,
})

const TemplateCRUDModel = mongoose.models.AccountModel || mongoose.model('TemplateCRUD', Schema)

export default TemplateCRUDModel
