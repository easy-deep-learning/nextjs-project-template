import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  authorId: mongoose.Types.ObjectId,
  created_at: Date,
  updated_at: Date,
  title: String,
  text: String,
})

const TemplateCRUDModel = mongoose.models.TemplateCRUD || mongoose.model('TemplateCRUD', Schema)

export default TemplateCRUDModel
