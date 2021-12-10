// creating custom signin page usgin NextAuth

import Head from 'next/head';
import Image from "next/image";
// useSession() hook in NextAuth
import { getProviders, signIn, useSession } from "next-auth/react";
// import useRouter() hook 
import { useRouter } from 'next/router';
// import useEffect() hook
import {useEffect } from 'react';

// import the loader component
import LoaderAnimation from '../../components/loaderAnimation';

        // access the server side providers
function Signin({ providers }) {

    // useSession() hook in nextAuth
    const { data: session } = useSession();

    console.log("session", session);

    // useRouter() hook in next.js
    // https://nextjs.org/docs/api-reference/next/router
    const router = useRouter();

    // useEffect() hook with a non-empty optional dependency array
    // Always remember : always render ke baad hi chalega useEffect() hook.
    // By using useEffect Hook, you tell React that your component needs to do something after render.

    // useffect() hook with with a non-empty optional dependency array is Similar to componentDidMount() and componentDidUpdate() lifecycle method combined together, but only for a certain state update and not for every state update.
    // i.e. useEffect() will be first called after the first render(on mount) and is called after every render due to a certain state update and not for every state update.
    // You can tell React to skip applying an effect(call useEffect()) if certain values(certain state) haven’t changed between re-renders. 
    // To do so, pass an array as an optional second argument to useEffect
    useEffect(

        // "effect" / React Effect Callback Function
        () => {

            // "SIDE EFFECTS WALA WORK"

            // Always remember : always render ke baad hi chalega useEffect() hook.
            console.log("useEffect");

            // if session is not null i.e there is a valid session, then redirect/route to "/" page
            if(session) {
                console.log(`session is already valid --> route to "/" page`);
                router.push("/");
            }

        }, [session] // a non-empty otional dependency array --> call useEffect after every render due to "session" state update only and not after every render for any other state update
                        // --> i.e. // Only re-run the useEffect if "session" changes and not after every render for any other state update.

    )

    // if session is not null i.e there is a valid session, then show/return the Loader component
    if(session) {

        return (
            <LoaderAnimation />
        )
    }
    
    // return (
    //     <LoaderAnimation />
    // )

    return (
        <div className="h-screen flex flex-col items-center pt-40 space-y-8">

            {console.log("signin page is rendered")}

            {/* next.js head component */}
            <Head>
                <title>Login - Spotify</title>
                <link rel="icon" href="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/spotify-512.png" />
            </Head>

            <Image
                src="https://rb.gy/y9mwtb"
                height={250}
                width={600}
                objectFit="contain"
                className="animate-pulse"
            />

            {/* access the providers */}
            {
                Object.values(providers).map((provider) => {

                    return (
                        <div key={provider.name}>
                            {console.log("provider", provider)}

                            <button 
                                className="text-white py-4 px-6 rounded-full bg-[#1db954] border border-transparent 
                                            uppercase font-bold text-xs tracking-wider hover:bg-[#0db146] hover:scale-105 
                                            transition duration-300 ease-out md:text-base"
                                onClick={() => {
                                    // https://next-auth.js.org/getting-started/client#signin
                                    signIn(provider.id);
                                }}
                            >
                                Sign in with {provider.name}
                            </button>

                        </div>
                    )
                })
            }
                   
        </div>
    )
}

export default Signin;

// Server Side Rendering to get the information pre-build on the server, 
// and then pre-fetch that information from server to the application using props.
export async function getServerSideProps() {

    // https://next-auth.js.org/getting-started/client#getproviders
    const providers = await getProviders();

    console.log("providers", providers);
    
    return {
      props: { providers },
    };
}

