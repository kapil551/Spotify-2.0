// Poster component of dashboard body section
// _rfce

    // accessing props using destructuring
function Poster({track}) {
    return (
        <div className="border-2 border-white text-white h-[22.5rem] w-[16.25rem] rounded-[3rem] text-center">

            <img 
                src={track.albumUrl}
                alt="album-image"
                className="" 
            />

            <div>

                <div>

                </div>

                <div>
                    <h4> {track.title} </h4>
                    <h6> {track.artist} </h6>
                </div>

            </div>
            
        </div>
    )
}

export default Poster;
