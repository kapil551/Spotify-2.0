
        // accessing props using destructuring
function RecentlyPlayedTrack({ track }) {
    return (
        <div className="border-2 border-blue-900 flex items-center space-x-3">
            
            <img 
                src={track.albumUrl}
                alt="" 
                className="w-[3.25rem] h[3.25rem] rounded-full"
            />

            <div>
                <h4 className="text-white text-[0.8rem] mb-0.5 font-semibold hover:underline cursor-pointer truncate max-w-[9.3rem]"> 
                    {track.title} 
                </h4>
                <p className="text-xs text-[#686868] font-semibold hover:underline cursor-pointer"> {track.artist} </p>
            </div>

        </div>
    )
}

export default RecentlyPlayedTrack;
