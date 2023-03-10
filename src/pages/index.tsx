import Head from 'next/head'
import useCustomer from '../backend/db/hooks/useCustomer'
import Layout from '../components/Layout'
import Table from '../components/Table'


export default function Home() {

  const { 
    customersList,
    selectedCustomer,
    deletedCustomer
  } = useCustomer()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-b from-sky-100 via-slate-200 to-gray-200
    
    `}>
      <Head>
        <title>CRUD Next</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title='Customers' hasButtonCreate hRef='/customer'>
        <Table customers={customersList}
          selectedCustomer={selectedCustomer}
          deletedCustomer={deletedCustomer} />
      </Layout>
    </div>
  )
}
