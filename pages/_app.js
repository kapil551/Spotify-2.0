import '../styles/globals.css';

// https://next-auth.js.org/getting-started/example#configure-shared-session-state
// pages/_app.js
import { SessionProvider } from "next-auth/react";

function MyApp({Component, pageProps: { session, ...pageProps }, }) {
  
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
