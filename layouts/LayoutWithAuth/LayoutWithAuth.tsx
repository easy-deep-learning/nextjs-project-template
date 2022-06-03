import { useSession } from 'next-auth/react'
import React, { FC } from 'react'

type LayoutProps = {
  children: React.ReactNode
}

export const LayoutWithAuth: FC<LayoutProps> = ({ children }) => {
  const { data: session, status } = useSession()

  console.log('session: ', session) // eslint-disable-line
  console.log('status: ', status) // eslint-disable-line

  return (
    <>
      <main>{children}</main>
    </>
  )
}

