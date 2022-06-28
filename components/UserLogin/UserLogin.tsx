import { UserOutlined } from '@ant-design/icons'
import {
  Avatar,
  Button,
} from 'antd'
import { Session } from 'next-auth'
import React, { FC } from 'react'

export type UserLoginProps = {
  session: Session | null
  status: string
  signOut: () => {}
  signIn: () => {}
}

const UserLogin: FC<UserLoginProps> = ({
  session,
  status,
  signOut,
  signIn,
}) => {
  return (
    <div>
      {status === 'authenticated' && (
        <div>
          <Avatar src={session?.user?.image} icon={<UserOutlined />} />
          <span>{session?.user?.name}</span>
          <Button
            onClick={(e) => {
              e.preventDefault()
              signOut()
            }}
          >
            Sign out
          </Button>
        </div>
      )}

      {status !== 'authenticated' && (
        <Button
          onClick={(e) => {
            e.preventDefault()
            signIn()
          }}
        >
          Sign in
        </Button>
      )}
    </div>
  )
}

export {
  UserLogin,
}
