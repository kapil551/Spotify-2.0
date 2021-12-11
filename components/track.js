
import { ImHeadphones } from "react-icons/im";
import { AiFillHeart } from "react-icons/ai";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";

// import useRecoilState from recoil
import { useRecoilState } from "recoil";

// import playState, playingTrackState  from recoil atom
import { playState, playingTrackState } from "../atoms/playerAtom";

// import useState
import { useState } from "react";


    // access props using destructuring 
function Track({ track , chooseTrack }) {

    // useState
    const [hasLiked, setHasLiked] = useState(false);

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

    const handlePlay = () => {
        chooseTrack(track);
    
        if (track.uri === playingTrack.uri) {
          setPlay(!play);
        }
    };

    return (
        
        <div className=" text-white flex items-center justify-between space-x-20 cursor-default 
        py-2 px-4 rounded-lg hover:bg-white/10 transition ease-out group">
           
           <div className="flex items-center">

               <img 
                    src={track.albumUrl}
                    alt=""
                    className="rounded-xl h-12 w-12 object-cover mr-3"
               />

               <div>
                   <h4 className="text-white text-sm font-semibold truncate w-[28rem]"> {track.title} </h4>
                   <p className="text-[rgb(179,179,179)] text-[0.8rem] font-semibold group-hover:text-white"> {track.artist} </p>
               </div>

           </div>

           <div className=" flex items-center space-x-2.5 md:ml-auto">

               <div className="text-white flex space-x-1 text-sm font-semibold">
                   <ImHeadphones />
                   <h4 className="font-sans"> {track.popularity} </h4>
               </div>

               <div className="border-2 border-[#262626] flex items-center rounded-full w-[5.3rem] h-10 relative
                                cursor-pointer group-hover:border-white/40">
                   <AiFillHeart 
                        /* using my custom class named "icon" */
                        className={`text-xl ml-3 icon ${ hasLiked ?  "text-[#1ED760]" : "text-[#868686]"}`}
                        onClick={() => {
                            setHasLiked(!hasLiked);
                        }}
                   />

                    {
                        track.uri === playingTrack.uri && play 
                        
                        ? (
                            <>
                            <div
                                className="h-10 w-10 rounded-full border border-[#15883e] flex items-center justify-center absolute -right-0.5 bg-[#15883e] icon hover:scale-110"
                                onClick={handlePlay}>
                                <BsFillPauseFill className="text-white text-xl" />
                            </div>
                            </>
                        ) 
                        
                        : (
                            <>
                            <div
                                className="h-10 w-10 rounded-full border border-white/60 flex items-center justify-center absolute -right-0.5 hover:bg-[#15883e] hover:border-[#15883e] icon hover:scale-110"
                                onClick={handlePlay}>
                                <BsFillPlayFill className="text-white text-xl ml-[1px]" />
                            </div>
                            </>
                        )
                    }

               </div>

           </div>

        </div>
    )
}

export default Track;
