import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <>
            <div className="navbar bg-base-200 shadow-sm">
    <div className="flex-1">
        <Link to="/"className="btn btn-ghost text-2xl font-extrabold">JobTrackr.</Link>
    </div>
    <div className="flex gap-3 p-2 items-center">
        <h3 className="m-3 text-xl">Welcome, User!</h3>
        <div className="dropdown dropdown-end ">
            
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ">
            <div className="w-10 rounded-full">
            <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
        </div>
        <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-300 border border-base-100 rounded-xl  rounded-box z-1 mt-3 w-52 p-2 shadow">     

            <li>
                <Link to="/analytics"className="justify-between">
                Analytics
                
                </Link>
            </li>

            <li>
                <Link to="/reminders"className="justify-between">
                Reminders
                <span className="badge border rounded-4xl">New</span>
                </Link>
            </li>

            <li>
                <Link to="/settings" className="justify-between">
                Settings
                </Link>
            </li>

            <li><a>Logout</a></li>
        </ul>
        </div>
    </div>
    </div>
    </>
  )
}

export default NavBar