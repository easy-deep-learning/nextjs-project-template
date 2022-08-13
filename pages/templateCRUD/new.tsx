import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import { TemplateCRUDItemForm } from '../../components'

const TemplateCRUDNew: NextPage = () => {

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
      <TemplateCRUDItemForm  onSave={onSave} />
    </div>

  )
}

export default TemplateCRUDNew
