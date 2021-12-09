// import icon from React Icons    
import { MdOutlineShortText } from "react-icons/md";
       
        // access props using destructuring
function Searchbar({ search, setSearch }) {
    return (
        <div className="max-w-[1150px] bg-[#1a1a1a] border-2 border-[#333333] rounded-full overflow-hidden p-1.5 px-5 pr-8 flex items-center">

            {/* 
                flex-shrink-0:

                    - https://tailwindcss.com/docs/flex-shrink
                    - Use flex-shrink-0 to prevent a flex item from shrinking:
                    - This item will not shrink below its initial size 
                
                adding animation using tailwind css:

                    - https://tailwindcss.com/docs/animation#class-reference
                    - animate-pulse
            */}
            
            {/* search animation icon */}
            <div className=" border-2 h-4 w-4 rounded-full flex-shrink-0 animate-pulse">
            </div>
            {/* input tag */}
            <input
                type="text"
                className="bg-[#1A1A1A] text-white border-none lg:w-full focus:ring-0 outline-none placeholder-[#FAFAFA] text-xs"
                placeholder="Search..."
                value={search}
                onChange={(event) => {
                    setSearch(event.target.value)
                }}
            />

            {/* For now these buttons are static and have no functionality */}
            {/* searchbar buttons */}
            {/* divide style, divide width, divide color */}
            <div className="flex items-center ml-auto divide-dotted divide-x-2 divide-[#333333]">
                
                {/* Trending Now, New Releases and Liked Songs buttons container */}
                <div className="flex space-x-2 pr-5">

                    {/* I am using the custom class created by me called "tag"  inside ../styles/globals.css*/}
                    <button className="tag"> Trending Now </button>
                    <button className="tag"> New Releases </button>
                    <button className="tag"> Liked Songs </button>

                </div>

                {/* searchbar filter button */}
                <div className="flex items-center space-x-1.5 text-[#CECECE] pl-4">

                    <MdOutlineShortText className="text-2xl animate-pulse" />
                    <span className="font-medium text-sm"> Filters </span>

                </div>

            </div>
            
        </div>
    )
}

export default Searchbar;
