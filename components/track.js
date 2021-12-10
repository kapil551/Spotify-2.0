
import { ImHeadphones } from "react-icons/im";
import { AiFillHeart } from "react-icons/ai";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";

    // access props using destructuring 
function Track({track}) {

    return (
        
        <div className="text-white">
           
           <div>

               <img 
                    src={track.albumUrl}
                    alt=""
               />

               <div>
                   <h4> {track.title} </h4>
                   <p> {track.artist} </p>
               </div>

           </div>

           <div>

               <div>
                   <ImHeadphones />
                   <h4> {track.popularity} </h4>
               </div>

               <div>
                   <AiFillHeart />

                   {
                       <div>
                           <BsFillPlayFill />
                       </div>
                   }

               </div>

           </div>

        </div>
    )
}

export default Track;
