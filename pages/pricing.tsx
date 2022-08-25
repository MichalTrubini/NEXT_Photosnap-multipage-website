import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout/layout'
import PricingModule from '../components/modules/pricingModule'

const Pricing: NextPage = () => {
  return (
    <>
      <Head>
        <title>Photosnap - Pricing</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PricingModule/>
      </Layout>
    </>
  )
}

export default Pricing