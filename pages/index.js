import Head from 'next/head'

// import the dashboard component
import Dashboard from '../components/dashboard';

export default function Home() {
  return (
    <div className="">

      {/* next.js head component */}
      <Head>
        <title>Spotify - Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Dashboard />

    </div>
  )
}
