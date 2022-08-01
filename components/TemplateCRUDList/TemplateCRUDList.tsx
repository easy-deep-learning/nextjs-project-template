import type { NextPage } from 'next'
import { TemplateCRUDItemProps, TemplateCRUDItem, TemplateCRUDItemForm } from '../TemplateCRUDItem'

export type TemplateCRUDListProps = { items: TemplateCRUDItemProps[], onSave: (values: unknown) => void }

const TemplateCRUDList: NextPage<TemplateCRUDListProps> = ({ items, onSave }) => {
  return (
    <div className={'TemplateCRUDList'}>
      {items.length === 0 && <TemplateCRUDItemForm onSave={onSave} />}

      {items.map(item => (<TemplateCRUDItem key={item._id.toString()} {...item} />))}
    </div>
  )
}

export { TemplateCRUDList }
