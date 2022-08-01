import type { NextPage } from 'next'
import { TemplateCRUDItemProps, TemplateCRUDItem, TemplateCRUDItemForm } from '../TemplateCRUDItem'

export type TemplateCRUDListProps = { items: TemplateCRUDItemProps[] }

const TemplateCRUDList: NextPage<TemplateCRUDListProps> = ({ items }) => {
  console.log("TemplateCRUDList@items: ", items); // eslint-disable-line

  return (
    <div className={'TemplateCRUDList'}>
      {items.length === 0 && <TemplateCRUDItemForm />}

      {items.map(item => (<TemplateCRUDItem key={item._id.toString()} {...item} />))}
    </div>
  )
}

export { TemplateCRUDList }
