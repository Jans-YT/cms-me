import Navbar from "../component/navbar"
import Sidebar from "../component/sidebar"

function MainPage(){
    return(
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Navbar />
                <div className="p-4">
                    <h1>Dashboard</h1>
                </div>
            </div>
        </div>
    )
}
export default MainPage