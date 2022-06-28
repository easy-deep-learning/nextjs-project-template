import 'antd/dist/antd.css'
import type { NextPage } from 'next'
import Head from 'next/head'

import { LayoutWithAuth } from '../layouts'

const Home: NextPage = () => {

  return (
    <LayoutWithAuth>
      <div>
        <Head>
          <title>Next App Template</title>
        </Head>

        <main>main</main>

        <footer>footer</footer>
      </div>
    </LayoutWithAuth>

  )
}

export default Home
