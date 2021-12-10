import '../styles/globals.css';

// https://recoiljs.org/docs/introduction/getting-started/#recoilroot
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

// https://next-auth.js.org/getting-started/example#configure-shared-session-state
// pages/_app.js
import { SessionProvider } from "next-auth/react";

function MyApp({Component, pageProps: { session, ...pageProps }, }) {
  
  return (

    <RecoilRoot>

      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>

    </RecoilRoot>

  )
}

export default MyApp
