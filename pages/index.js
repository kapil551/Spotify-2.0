import Head from 'next/head';
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

// import the dashboard component
import Dashboard from '../components/dashboard';

export default function Home() {

  console.log(session, status);

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
