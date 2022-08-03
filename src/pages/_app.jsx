import { useEffect } from 'react'

import Layout from '../layouts/Layout'
import "bootstrap/dist/css/bootstrap.min.css"
import '../styles/globals.css'
import '../../colors/colors.min.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap")
  }, [])

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>


    </>
  )
}

export default MyApp
