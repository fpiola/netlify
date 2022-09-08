import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Seja bem vindo" />
        <p className="description">
          Site teste com build github
        </p>
      </main>

      <Footer />
    </div>
  )
}
