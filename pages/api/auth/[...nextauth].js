// https://next-auth.js.org/getting-started/example
// https://next-auth.js.org/providers/spotify

import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

/**
 * Takes a token, and returns a new token with updated
 * `accessToken` and `accessTokenExpires`. If an error occurs,
 * returns the old token and an error property
 */
async function refreshAccessToken(token) {
  
    try {
        const url =
        "https://accounts.spotify.com/api/token?" +
        new URLSearchParams({
            client_id: process.env.SPOTIFY_CLIENT_ID,
            client_secret: process.env.SPOTIFY_CLIENT_SECRET,
            grant_type: "refresh_token",
            refresh_token: token.refreshToken,
        });

        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            method: "POST",
        });

        const refreshedTokens = await response.json();

        if (!response.ok) {
            throw refreshedTokens;
        }

        return {
            ...token,
            accessToken: refreshedTokens.access_token,
            accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
            refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
        };
  } 
  catch (error) {
    console.log(error);
      
    return {
    ...token,
    error: "RefreshAccessTokenError",
    };
  }
}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
        // access the local environment variables created inside .env.local file
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
        authorization:
        "https://accounts.spotify.com/authorize?scope=user-read-email,playlist-read-private,playlist-read-collaborative,user-read-email,streaming,user-read-private,user-library-read,user-top-read,user-library-modify,user-read-playback-state,user-modify-playback-state,user-read-recently-played,user-follow-read,user-read-currently-playing",

      })
    // ...add more providers here
  ],
  /*creating custom login/signin page in NextAuth:
    https://next-auth.js.org/configuration/pages
  */
    pages: {
        signIn: '/auth/signin',
    },
    /*
        What are callbacks in NextAuth:
            - https://next-auth.js.org/configuration/callbacks

        JWT Callback:
            - https://next-auth.js.org/configuration/callbacks#jwt-callback

        Session Callback:
            - https://next-auth.js.org/configuration/callbacks#session-callback
        
        Refresh Access Token NextAuth:
            - https://next-auth.js.org/tutorials/refresh-token-rotation
    */
    callbacks: {
        /*
            JWT Callback:
                - https://next-auth.js.org/configuration/callbacks#jwt-callback
        */
        async jwt({ token, user, account }) {
            
            // Initial sign in
            if (account && user) {

                return {
                    accessToken: account.access_token,
                    accessTokenExpires: Date.now() + account.expires_in * 1000,
                    refreshToken: account.refresh_token,
                    user,
                };
            }

            // Return previous token if the access token has not expired yet
            if (Date.now() < token.accessTokenExpires) {
                return token;
            }

            // Access token has expired, try to update it
            return refreshAccessToken(token);
        },
        /*
            Session Callback:
                - https://next-auth.js.org/configuration/callbacks#session-callback
        */
        async session({ session, token }) {
            session.user = token.user;
            session.accessToken = token.accessToken;
            session.error = token.error;

            return session;
        },
    },
});