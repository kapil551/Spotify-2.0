// Image component in next.js
// https://nextjs.org/docs/basic-features/image-optimization
// https://nextjs.org/docs/api-reference/next/image
import Image from "next/image";

// add icons using heroicons
import {
    ChartBarIcon,
    ClockIcon,
    DotsHorizontalIcon,
    HomeIcon,
} from "@heroicons/react/solid";

// add icons using React Icons
import { FaMicrophoneAlt } from "react-icons/fa";
import { RiCompassFill } from "react-icons/ri";

function LeftSidebar() {
    return (

        // https://developer.mozilla.org/en-US/docs/Web/CSS/position
        // z-index in css --> https://developer.mozilla.org/en-US/docs/Web/CSS/z-index
        <section className="fixed top-0 z-40 flex flex-col p-4 items-center bg-black w-[90px] h-screen space-y-8">

            {/* image logo */}
            <Image 
                src="https://rb.gy/xkacau"
                width={56}
                height={56}
                objectFit="contain"
            />

            {/* tools */}
            <div className="flex flex-col space-y-8">

                {/* I am using the custom class created by me called "sidebarIcon" 
                */}
                <HomeIcon className="sidebarIcon text-white opacity-[0.85]" />
                <RiCompassFill className="sidebarIcon text-2xl" />
                <FaMicrophoneAlt className="sidebarIcon ml-1" />
                <ChartBarIcon className="sidebarIcon" />
                <ClockIcon className="sidebarIcon" />
                <DotsHorizontalIcon className="sidebarIcon" />

            </div>

        </section>
    )
}

export default LeftSidebar;
