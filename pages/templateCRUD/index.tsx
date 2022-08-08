import React from 'react'
import 'antd/dist/antd.css'
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

  const onSave = (values: unknown) => {
    console.log('values: ', values) // eslint-disable-line
    fetch('/api/templateCRUD',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
      .then(response => response.json())
      .then(result => console.log('result: ', result)) // eslint-disable-line)
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <div>
      <Head>
        <title>TemplateCRUD</title>
      </Head>
      <TemplateCRUDList items={templateCRUDList} onSave={onSave} />
    </div>

  )
}

export default TemplateCRUD
