import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import 'antd/dist/antd.css'

import useFetchTemplateCRUDItem from '../useFetchTemplateCRUDItem'

import {
  TemplateCRUDItemForm,
} from '../../../components'

const fetcher = (id: string) => fetch(`/api/templateCRUD/${id}`)
  .then(response => response.json())
  .then(result => result.data)
  .catch(error => {
    console.error(error)
  })

const TemplateCRUD: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  const { item, error, isLoading } = useFetchTemplateCRUDItem(id as string)

  const onSave = (values: { _id: string }) => {
    fetch(`/api/templateCRUD/${values?._id}`,
      {
        method: 'PATCH',
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

  const onDelete = (id: string) => {
    fetch(`/api/templateCRUD/${id}`,
      {
        method: 'DELETE',
      })
      .then(response => response.json())
      .then(result => console.log('result: ', result)) // eslint-disable-line)
      .catch(error => {
        console.error(error)
      })
  }

  if (error) {
    return <div>error</div>
  }

  if (isLoading) {
    return <div>isLoading</div>
  }

  return (
    <div>
      <Head>
        <title>TemplateCRUD</title>
      </Head>
      <TemplateCRUDItemForm {...item} onSave={onSave} onDelete={onDelete} />
    </div>

  )
}

export default TemplateCRUD
