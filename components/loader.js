import Image from "next/image";
// import {ThreeBounce} from "better-react-spinkit";

function Loader() {
    return (
        <div>
           
           <div>

               <span>
                   <Image 
                        src="https://rb.gy/y9mwtb"
                        layout="fill"
                        objectFit="contain"
                        className="animate-pulse"
                   />
               </span>

           </div>

        </div>
    )
}

export default Loader;
