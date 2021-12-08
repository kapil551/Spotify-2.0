import Body from "./body";
import LeftSidebar from "./leftSidebar";
import RightSidebar from "./rightSidebar";

function Dashboard() {
    return (

        <main>

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
