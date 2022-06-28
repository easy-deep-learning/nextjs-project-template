import {
  signIn,
  signOut,
  useSession,
} from 'next-auth/react'
import React, { FC } from 'react'

import { UserLogin } from '../../components'

type LayoutProps = {
  children: React.ReactNode
}

export const LayoutWithAuth: FC<LayoutProps> = ({ children }) => {
  const { data: session, status } = useSession()

  return (
    <div>
      <UserLogin
        session={session}
        status={status}
        signOut={signOut}
        signIn={signIn}
      />
      <main>{children}</main>
    </div>
  )
}

