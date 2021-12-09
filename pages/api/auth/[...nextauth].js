// https://next-auth.js.org/getting-started/example
// https://next-auth.js.org/providers/spotify

import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
        // access the local environment variables created inside .env.local file
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET
      })
    // ...add more providers here
  ],
  /*creating custom login/signin page in NextAuth:
    https://next-auth.js.org/configuration/pages
  */
    pages: {
        signIn: '/auth/signin',
      },
})