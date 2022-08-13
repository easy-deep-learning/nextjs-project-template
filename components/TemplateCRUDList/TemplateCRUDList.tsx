import type { NextPage } from 'next'
import Link from 'next/link'
import { List, Button } from 'antd';

import { TemplateCRUDItemProps, TemplateCRUDItem, TemplateCRUDItemForm } from '../TemplateCRUDItem'

export type TemplateCRUDListProps = { items: TemplateCRUDItemProps[], onSave: (values: unknown) => void }

const TemplateCRUDList: NextPage<TemplateCRUDListProps> = ({ items, onSave }) => {
  return (
    <div className={'TemplateCRUDList'}>
      {items.length === 0 && <TemplateCRUDItemForm onSave={onSave} />}

      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={items}
        renderItem={item => (
          <List.Item>
            <TemplateCRUDItem key={item._id.toString()} {...item} />
            <Button type="link">
              <Link href={`/templateCRUD/${item._id}`}>
                <a>show</a>
              </Link>
            </Button>
            <Button type="link">
              <Link href={`/templateCRUD/${item._id}/edit`}>
                <a>edit</a>
              </Link>
            </Button>
          </List.Item>
        )}
      />
    </div>
  )
}

export { TemplateCRUDList }
