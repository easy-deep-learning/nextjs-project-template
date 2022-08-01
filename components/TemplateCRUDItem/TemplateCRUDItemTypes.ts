import mongoose from 'mongoose'

export type TemplateCRUDItemProps = {
  _id: mongoose.Types.ObjectId
  author: mongoose.Types.ObjectId
  title: String
  text: String
  created_at: String
  updated_at: String
}
