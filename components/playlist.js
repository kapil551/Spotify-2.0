
        // accessing props using destructuring
function Playlist({ playlist }) {

    return (
        <div className=" flex items-center space-x-3"
        >
            <img 
                src={playlist.image}
                alt="" 
                className="w-[3.25rem] h[3.25rem] rounded-full"
            />

            <div>
                <h4 className="text-white text-[0.8rem] mb-0.5 font-semibold hover:underline cursor-pointer truncate max-w-[9.3rem]"> 
                    {playlist.name} 
                </h4>
            </div>

        </div>
    )
}

export default Playlist;
