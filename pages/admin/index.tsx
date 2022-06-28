import { List } from 'antd'
import 'antd/dist/antd.css'
import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Link from 'next/link'

const data = [
  {
    path: 'users',
    text: 'Users',
  },
]

const Admin: NextPage = () => {
  const { status } = useSession({
    required: true,
    onUnauthenticated () {
      // The user is not authenticated, handle it here.
    },
  })

  return (
    <div>
      <Head>
        <title>Admin</title>
      </Head>
      <List
        bordered
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Link href={`/admin/${item.path}`}>
              <a>{item.text}</a>
            </Link>
          </List.Item>
        )}
      />
    </div>

  )
}

export default Admin
