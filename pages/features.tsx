import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout/layout'
import FeaturesModule from '../components/modules/featuresModule'

const Features: NextPage = () => {
  return (
    <>
      <Head>
        <title>Photosnap - Features</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <FeaturesModule/>
      </Layout>
    </>
  )
}

export default Features