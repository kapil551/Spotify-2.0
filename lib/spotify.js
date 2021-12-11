// Google: spotify web api node
// https://github.com/thelinmichael/spotify-web-api-node

import SpotifyWebApi from "spotify-web-api-node";

// creating an instance of spotify web api
const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
});

export default spotifyApi;
  