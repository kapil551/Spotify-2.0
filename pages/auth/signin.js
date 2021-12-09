// creating custom signin page usgin NextAuth

import Head from 'next/head';
import Image from "next/image";
// useSession() hook in NextAuth
import { getProviders, signIn, useSession } from "next-auth/react";

        // access the server side providers
function Signin({ providers }) {

    const { data: session } = useSession();
    console.log("session", session);

    return (
        <div className="h-screen flex flex-col items-center pt-40 space-y-8">

            {/* next.js head component */}
            <Head>
                <title>Login - Spotify</title>
                <link rel="icon" href="/favicon.ico" />
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

