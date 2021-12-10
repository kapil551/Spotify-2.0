// Poster component of dashboard body section
// _rfce

// import icons from React Icons
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";

    // accessing props using destructuring
function Poster({track}) {
    return (

        /*
            Group-hover in tailwindcss:  
    
                https://tailwindcss.com/docs/hover-focus-and-other-states#group-hover

                If you need to style a child element when hovering over a specific parent element, add the group class to the parent element and add the group-hover: prefix to the utility on the child element.
        */
        <div className="border-2 border-white h-[22.5rem] w-[16.25rem] rounded-[3rem] overflow-hidden 
                        text-white/80 cursor-pointer hover:scale-105 hover:text-white/100
                        transition duration-200 ease-out mx-auto relative group">

            <img 
                src={track.albumUrl}
                alt="album-image"
                className="border-2 border-blue-500 h-full width-full object-cover rounded-[50px] opacity-80
                            group-hover:opacity-100 absolute inset-0" 
            />

            <div className="border-2 border-red-600 absolute bottom-10 inset-x-0 ml-4 flex items-center space-x-3.5">

                <div className="border-2 border-yellow-400 h-10 w-10 bg-[#15883e] flex items-center justify-center
                                rounded-full group-hover:bg-[#1db954] flex-shrink-0">

                    <BsFillPlayFill className="text-white text-xl ml-[1px]"/>

                </div>

                <div className="text-[1rem]">
                    <h4 className="font-extrabold truncate w-44"> {track.title} </h4>
                    <h6> {track.artist} </h6>
                </div>

            </div>
            
        </div>
    )
}

export default Poster;
