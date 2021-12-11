import Head from 'next/head';
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

// import the dashboard component
import Dashboard from '../components/Dashboard';
// import the loader component
import LoaderAnimation from '../components/LoaderAnimation';

export default function Home() {

  const router = useRouter();

  // https://next-auth.js.org/getting-started/client#require-session
  const { data: session, status } = useSession({
    required: true,
    // if the user is not "authenticated" then redirect/route to "/auth/signin" page 
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      router.push("/auth/signin");
    }
  });

  // console.log(session, status);

  // Show the Loading animation --> if status is "Loading"
  if(status === "loading") {
    return <LoaderAnimation />
  }

  return (
    <div className="">

      {/* next.js head component */}
      <Head>
        <title>Spotify - Dashboard</title>
        <link rel="icon" href="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/spotify-512.png" />
      </Head>

      <Dashboard />

    </div>
  )
}
