import Image from "next/image";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function LoaderAnimation() {
    return (

        <div className="h-screen bg-black">
           
           <div className="flex flex-col items-center space-y-4 pt-40">

               <span className="relative w-[25rem] h-[15.6rem]">
                   <Image 
                        src="https://rb.gy/y9mwtb"
                        layout="fill"
                        objectFit="contain"
                        className="animate-pulse"
                   />
               </span>

               <Loader type="ThreeDots" color="#cecece" height={100} width={100} />

           </div>

        </div>
    )
}

export default LoaderAnimation;
