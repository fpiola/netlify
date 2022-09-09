import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Site title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="seja bem vindo"/>
        <p className="text-3xl text-center">
          Site teste com build github
        </p>
      </main>

      <Footer />
    </div>
  )
}
