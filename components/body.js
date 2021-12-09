// import useState
import { useState } from "react";
// import the search component
import Searchbar from "./searchbar";
// import the Poster component
import Poster from "./poster";

function Body() {

    // useState hook
    const [search, setSearch] = useState("");
    const [searchResults, getSearchResults] = useState([]); // searchResults will be an array of search results

    console.log("search:", search);

    return (

        // default styling in tailwindcss is always mobile responsive first, and then breakpoints are added to make it 
        // responsive for bigger screens.
        // https://tailwindcss.com/docs/flex-grow
        // https://tailwindcss.com/docs/breakpoints
        <section className="border-2 border-red-500 bg-black ml-24 py-4 space-y-8 flex-grow md:max-w-6xl md:mr-2.5">
            
            {/* Searchbar component */}
            {/* passing information using props */}
            <Searchbar search={search} setSearch={setSearch} />

            {/* poster component */}
            {/* 
                1. Making a grid using tailwind css:

                    - grid grid-cols-2 gap-x-4 gap-y-8


                2. I also want to provide a scrollable functionality to the grid:

                    - overflow-y-scroll scrollbar-hide

                3. Adding breakpoints to make the grid responsive:

                    - lg:grid-cols-3 xl:grid-cols-4

            */}

            <div className="border-2 border-green-500 h-96 p-4 grid grid-cols-2 gap-x-4 gap-y-8 overflow-y-scroll scrollbar-hide lg:grid-cols-3 xl:grid-cols-4">
                <Poster />
                <Poster />
                <Poster />
                <Poster />
                <Poster />
                <Poster />
                <Poster />
                <Poster />
                <Poster />
                <Poster />
            </div>


        </section>
    )
}

export default Body;
