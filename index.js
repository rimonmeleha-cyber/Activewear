import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Products from '../components/Products'
import About from '../components/About'
import Values from '../components/Values'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>ÉLA — ספורט צנוע ואלגנטי</title>
        <meta name="description" content="בגדי ספורט צנועים ליוגה ופילאטיס — נוחות, כיסוי וסטייל." />
      </Head>

      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Products />
        <About />
        <Values />
      </main>
    </Layout>
  )
}
