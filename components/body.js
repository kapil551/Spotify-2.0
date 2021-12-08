// import the search component
import Searchbar from "./searchbar";

function Body() {
    return (

        // default styling in tailwindcss is always mobile responsive first, and then breakpoints are added to make it 
        // responsive for bigger screens.
        // https://tailwindcss.com/docs/flex-grow
        // https://tailwindcss.com/docs/breakpoints
        <section className="border-2 border-red-500 bg-black ml-24 py-4 space-y-8 flex-grow md:max-w-6xl md:mr-2.5">
            
            {/* Searchbar component */}
            <Searchbar />


        </section>
    )
}

export default Body;
