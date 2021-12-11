import { useEffect } from "react";

// import playState, playingTrackState  from recoil atom
import { playState, playingTrackState} from "../atoms/playerAtom"; 
import { useRecoilState } from "recoil";

// import SpotifyPlayer
import SpotifyPlayer from 'react-spotify-web-playback';


    // accessing props using destructuring
function Player({ accessToken, trackUri }) {

    // console.log(accessToken, trackUri);

    // Recoil Atoms
    // https://recoiljs.org/docs/introduction/getting-started#atom
    // https://recoiljs.org/docs/basic-tutorial/atoms
    // useRecoilState() --> to update the contents of the "playState" atom
    const [play, setPlay] = useRecoilState(playState);
    // Now this "play" is stored in a global storage atom named "playState"
    // Also now i can access the contents of this global storage atom inside any other component

    const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);
    // Now this "playingTrack" is stored in a global storage atom named "playingTrackState"
    // Also now i can access the contents of this global storage atom inside any other component

    useEffect(
        () => {
            if(trackUri) {
                setPlay(true);
            }
        
        }, [trackUri]
    );

    // if there is no valid accessToken then hide the player and return nothing
    if(!accessToken) {
        return null;
    }

    return (

        <SpotifyPlayer 
            token={accessToken}

            uris={ trackUri ? trackUri : [] }

            //Get status updates from the player
            callback={(state) => {
                setPlay(state.isPlaying);
            }}

            // Control the player status
            play={play} 

            // Magnify the player's slider on hover
            magnifySliderOnHover={true}

            //Start the player immediately
            autoPlay={true}

            // Display a Favorite button. Needs additional scopes in your token!
            showSaveIcon

            styles={{
                bgColor: "#181818",
                color: "#fff",
                activeColor: "#fff",
                sliderColor: "#1cb954",
                trackArtistColor: "#ccc",
                trackNameColor: "#fff",
                height: "70px",
                sliderTrackColor: "#535353",
                sliderTrackBorderRadius: "4px",
                sliderHandleColor: "#fff",
                errorColor: "#fff",
                loaderColor: "#fff",
            }}
        />
    )
}

export default Player;
