import { ViewGridIcon } from "@heroicons/react/solid";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";
import { BiBell } from "react-icons/bi";

function RightSidebar() {
    return (
        <section className="border-2 text-white">
           
           <div className="">

               {/* Icons */}
               <div className="">
                   
                   <HiOutlineShieldCheck className="" />
                   <MdOutlineSettings className="" />
                   
                   <div className="">
                       <BiBell className=""/>
                   </div>

               </div>

                {/* Profile */}
                {/* <Dropdown /> */}

           </div>

           {/* recently played tracks */}
           <div className="">

               <div className="">

                   <h4 className=""></h4>
                   <ViewGridIcon className="" />

               </div>

               <div className="">

                   {/* <RecentlyPlayed /> */}

               </div>

               <button className=""> 
                   View All
               </button>

           </div>

        </section>
    )
}

export default RightSidebar;
