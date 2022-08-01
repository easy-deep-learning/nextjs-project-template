import mongoose from 'mongoose'
import type { NextPage } from 'next'

export type TemplateCRUDItemProps = {
  _id: mongoose.Types.ObjectId
  author: mongoose.Types.ObjectId
  title: String
  created_at: String
  updated_at: String
}


const TemplateCRUDItem: NextPage<TemplateCRUDItemProps> = ({ _id, title, author, created_at, updated_at }) => {
  return (
    <div className={'TemplateCRUDItem'} data-id={_id}>
      <div className="title">{title}</div>
      <div className={"author"}>{author.toString()}</div>
      <div className={"updated_at"}>{updated_at}</div>
      <div className={"created_at"}>{created_at}</div>
    </div>

  )
}

export { TemplateCRUDItem }
