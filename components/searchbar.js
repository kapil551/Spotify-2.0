function Searchbar() {
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
            />
            
        </div>
    )
}

export default Searchbar;
