import Body from "./body";
import LeftSidebar from "./leftSidebar";
import RightSidebar from "./rightSidebar";
import { useState, useEffect } from "react";

// import player component
import Player from "./player";

function Dashboard() {
    
    // useState() hook
    const [showPlayer, setShowPLayer] = useState(false);

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

    return (


        <main className="flex min-h-screen min-w-max bg-black lg:pb-24">

            {/* Left component -> sidebar */}
            <LeftSidebar />

            {/* mid component -> main body */}
            <Body />
            {/* right component --> right side bar */}
            <RightSidebar />

            {/* Player */}
            {
                showPlayer && (
                    <div className="border-2 border-white fixed bottom-0 left-0 right-0 z-50 h-20">
                        <Player />
                    </div>
                )
            }
            
        </main>
    )
}

export default Dashboard;
