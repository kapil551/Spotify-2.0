import Body from "./Body";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import spotifyApi from "../lib/spotify";

// import player component
import Player from "./Player";

// import playState, playingTrackState  from recoil atom
import { playState, playingTrackState} from "../atoms/playerAtom"; 
import { useRecoilState } from "recoil";

function Dashboard() {
    
    // useState() hook
    const [showPlayer, setShowPLayer] = useState(false);

    // useSession() hook
    const { data: session, status } = useSession();
    // console.log(session, status);

    const accessToken = session?.accessToken;

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


    // useEffect()
    /*
        If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument. 
        This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run. 
    */
    useEffect(
        () => {

            setShowPLayer(true);

        }, []
    );

    const chooseTrack = (track) => {

        setPlayingTrack(track);
    };

    useEffect(
        () => {

            if(!accessToken) {
                return;
            }

            spotifyApi.setAccessToken(accessToken);
        
        }, [accessToken]
    )

    return (

        <main className="flex min-h-screen min-w-max bg-black lg:pb-24">

            {/* Left component -> sidebar */}
            <LeftSidebar />

            {/* mid component -> main body */}
            <Body chooseTrack={chooseTrack} />
            {/* right component --> right side bar */}
            <RightSidebar chooseTrack={chooseTrack} />

            {/* Player */}
            {
                showPlayer && (
                    <div className="fixed bottom-0 left-0 right-0 z-50">
                        <Player  accessToken={accessToken} trackUri={playingTrack.uri} />
                    </div>
                )
            }
            
        </main>
    )
}

export default Dashboard;
