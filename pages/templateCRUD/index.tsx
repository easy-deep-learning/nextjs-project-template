import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import { TemplateCRUDList } from '../../components'

const TemplateCRUD: NextPage = () => {
  const [templateCRUDList, setTemplateCRUDList] = React.useState([])

  React.useEffect(() => {
    fetch('/api/templateCRUD')
      .then(response => response.json())
      .then(result => setTemplateCRUDList(result.data))
      .catch(error => {
        console.error(error)
      })

  }, [])

  return (
    <div>
      <Head>
        <title>TemplateCRUD</title>
      </Head>
      <TemplateCRUDList items={templateCRUDList} />
    </div>

  )
}

export default TemplateCRUD
