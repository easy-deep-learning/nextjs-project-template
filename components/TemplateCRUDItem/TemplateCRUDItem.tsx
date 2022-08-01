import type { NextPage } from 'next'

import { TemplateCRUDItemProps } from './TemplateCRUDItemTypes'

const TemplateCRUDItem: NextPage<TemplateCRUDItemProps> = ({ _id, title, text, author, created_at, updated_at }) => {
  return (
    <div className={'TemplateCRUDItem'} data-id={_id}>
      <div className="title">{title}</div>
      <div className="text">{text}</div>
      <div className={"author"}>{author?.toString()}</div>
      <div className={"updated_at"}>{updated_at}</div>
      <div className={"created_at"}>{created_at}</div>
    </div>

  )
}

export { TemplateCRUDItem }
