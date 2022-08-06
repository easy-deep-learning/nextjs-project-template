import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { TemplateCRUDItem, TemplateCRUDItemProps } from '../../components'

const TemplateCRUD: NextPage = () => {
  const [templateCRUDItem, setTemplateCRUDItem] = React.useState<TemplateCRUDItemProps>()

  const router = useRouter()
  const { id } = router.query

  React.useEffect(() => {
    if (id?.length > 0) {
      fetch(`/api/templateCRUD/${id}`)
        .then(response => response.json())
        .then(result => setTemplateCRUDItem(result.data))
        .then(data => { console.log('data: ', data); return data })
        .catch(error => {
          console.error(error)
        })
    }
  }, [id])

  return (
    <div>
      <Head>
        <title>TemplateCRUD</title>
      </Head>
      <TemplateCRUDItem {...templateCRUDItem} />
    </div>

  )
}

export default TemplateCRUD
