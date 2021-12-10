import Body from "./body";
import LeftSidebar from "./leftSidebar";
import RightSidebar from "./rightSidebar";

function Dashboard() {
    return (

        <main className="flex min-h-screen min-w-max bg-black lg:pb-24">

            {/* Left component -> sidebar */}
            <LeftSidebar />

            {/* mid component -> main body */}
            <Body />
            {/* right component --> right side bar */}
            <RightSidebar />
            
        </main>
    )
}

export default Dashboard;
