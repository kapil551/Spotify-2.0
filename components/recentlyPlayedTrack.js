// import useRecoilState from recoil
import { useRecoilState } from "recoil";

// import playState, playingTrackState  from recoil atom
import { playState, playingTrackState, currentSelectedTrack } from "../atoms/playerAtom"; 

        // accessing props using destructuring
function RecentlyPlayedTrack({ track }) {

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

    const handlePlayingTrack = () => {
        
        // console.log("handle playing track", play);
        
        // set the value of playing track to the track on which the user just clicked
        setPlayingTrack(track);

        console.log(track, playingTrack);
        
        // if the current track is the currently playing track 
        if(track.uri === playingTrack.uri) {
            
            setPlay(!play);
        }
        
    };

    return (
        <div className="border-2 border-blue-900 flex items-center space-x-3"
             onClick={handlePlayingTrack}
        >
            <img 
                src={track.albumUrl}
                alt="" 
                className="w-[3.25rem] h[3.25rem] rounded-full"
            />

            <div>
                <h4 className="text-white text-[0.8rem] mb-0.5 font-semibold hover:underline cursor-pointer truncate max-w-[9.3rem]"> 
                    {track.title} 
                </h4>
                <p className="text-xs text-[#686868] font-semibold hover:underline cursor-pointer"> {track.artist} </p>
            </div>

        </div>
    )
}

export default RecentlyPlayedTrack;
