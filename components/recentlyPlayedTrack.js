
        // accessing props using destructuring
function RecentlyPlayedTrack({ track }) {
    return (
        <div className="text-white">
            
            <img 
                src={track.albumUrl}
                alt="" 
            />

            <div>
                <h4> {track.title} </h4>
                <p> {track.artist} </p>
            </div>

        </div>
    )
}

export default RecentlyPlayedTrack;
