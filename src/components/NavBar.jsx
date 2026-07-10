

const NavBar = () => {
  return (
    <>
            <div className="navbar bg-base-200 shadow-sm">
    <div className="flex-1">
        <a className="btn btn-ghost text-2xl font-extrabold">JobTrackr.</a>
    </div>
    <div className="flex gap-3 p-2 items-center">
        <h3 className="m-3 text-xl">Welcome, User!</h3>
        <div className="dropdown dropdown-end">
            
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ">
            <div className="w-10 rounded-full">
            <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
        </div>
        <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-300 border rounded-xl border-0 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
            <a className="justify-between">
                Profile
                <span className="badge border rounded-4xl">New</span>
            </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
        </ul>
        </div>
    </div>
    </div>
    </>
  )
}

export default NavBar