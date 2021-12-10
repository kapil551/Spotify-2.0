import { ViewGridIcon } from "@heroicons/react/solid";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";
import { BiBell } from "react-icons/bi";

import spotifyApi from "../lib/spotify";
import { useSession } from "next-auth/react";

import { useState, useEffect } from "react";

// import RecentlyPlayedTrack component
import RecentlyPlayedTrack from "./recentlyPlayedTrack";

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

        <section className="border-2 text-white">
           
           <div className="">

               {/* Icons */}
               <div className="">
                   
                   <HiOutlineShieldCheck className="" />
                   <MdOutlineSettings className="" />
                   
                   <div className="">
                       <BiBell className=""/>
                   </div>

               </div>

                {/* Profile */}
                {/* <Dropdown /> */}

           </div>

           {/* recently played tracks */}
           <div className="">

               <div className="">

                   <h4 className=""></h4>
                   <ViewGridIcon className="" />

               </div>

               <div className="">

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

               <button className=""> 
                   View All
               </button>

           </div>

        </section>
    )
}

export default RightSidebar;
