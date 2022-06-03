import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'

import '../styles/globals.css'

/**
 * @see https://nextjs.org/docs/advanced-features/custom-app
 * @param Component
 * @param pageProps
 * @constructor
 */
function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
