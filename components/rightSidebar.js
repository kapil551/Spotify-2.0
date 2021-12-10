import { ViewGridIcon } from "@heroicons/react/solid";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";
import { BiBell } from "react-icons/bi";

import spotifyApi from "../lib/spotify";
import { useSession } from "next-auth/react";

import { useState, useEffect } from "react";

// import RecentlyPlayedTrack component
import RecentlyPlayedTrack from "./recentlyPlayedTrack";
// import Dropdown component
import Dropdown from "./dropDown";

function RightSidebar() {

    // useSession() hook
    const { data: session, status } = useSession();
    console.log(session, status);

    const accessToken = session?.accessToken;

    // useState() hook
    const [recentlyPLayedTracks, setRecentlyPlayedTracks] = useState([]); // recentlyPlayed will contain all the recently played tracks

    // Recently played tracks...
    useEffect(
        () => {

            if(!accessToken) {
                return;
            }

            spotifyApi.getMyRecentlyPlayedTracks({ limit: 20 }).then((recentlyPLayedTracksFetchedFromAPI) => {

                // console.log(recentlyPLayedTracksFetchedFromAPI);

                setRecentlyPlayedTracks(
                    recentlyPLayedTracksFetchedFromAPI.body.items.map(({ track }) => {

                        return {
                            id: track.id,
                            artist: track.artists[0].name,
                            title: track.name,
                            uri: track.uri,
                            albumUrl: track.album.images[0].url,
                        }
                    })
                )
            });

        }, [accessToken]
    );

    console.log("recentlyPlayedTracks", recentlyPLayedTracks);

    return (

        <section className="border-2 text-white p-4 space-y-8 pr-8">
           
           <div className="flex space-x-2 items-center justify-between">

               {/* Icons */}
               <div className="border-2 border-[#262626] flex items-center space-x-4 h-12 py-3 px-4 rounded-full">
                   
                   <HiOutlineShieldCheck className="text-[#CCCCCC] text-xl" />
                   <MdOutlineSettings className="text-[#CCCCCC] text-xl" />
                   
                   <div className="">
                       <BiBell className="text-[#CCCCCC] text-xl"/>
                   </div>

               </div>

                {/* Profile */}
                <Dropdown />

           </div>

           {/* recently played tracks */}
           <div className="bg-[#0d0d0d] border-2 border-[#262626] p-4 rounded-xl space-y-4">

               <div className="border-2 border-green-600 flex items-center justify-between">

                   <h4 className="text-white font-semibold text-sm"> Recently Played </h4>
                   <ViewGridIcon className="text-[#686868] h-6" />

               </div>

               <div className="border-2 border-red-600 h-[15.6rem] md:h-[25rem] space-y-4 overflow-y-scroll overflow-x-hidden scrollbar-hide">

                   {
                       recentlyPLayedTracks.map((track, index) => {

                        return (

                            <RecentlyPlayedTrack
                                key={index}
                                track={track} 
                            />
                        )
                       })
                   }
                   


               </div>

               <button className="text-[#CECECE] bg-[#1a1a1a] bg-opacity-80 text-[0.8rem] font-bold py-3.5 px-4 rounded-xl w-full
                                    hover:bg-opacity-100 transition ease-out"> 
                   View All
               </button>

           </div>

        </section>
    )
}

export default RightSidebar;
