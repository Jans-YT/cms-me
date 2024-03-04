function Sidebar() {
    return (
        
        <div className="bg-gray-800 text-white h-full w-64 flex flex-col drawer lg:drawer-open" >
            {/* Sidebar content */}
            {/* <div className="p-4">Sidebar Content
            
            </div> */}

            <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content content-center">
                {/* Sidebar content here */}
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>
            </ul>
        </div>
    )
}
export default Sidebar