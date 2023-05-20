import React, { useContext } from 'react';
import { Link, NavLink, Navigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handelLogOut = () => {
        logOut().then(() => {
            <Navigate to="/" />
        }).catch(err => console.log(err))
    }
    const navItems = <>
        <li><NavLink className={({ isActive }) => isActive ? "text-yellow-500" : "text-white"} to='/'>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "text-yellow-500" : "text-white"} to='/all-toys'>All toys</NavLink></li>
        
           <>
            <li><NavLink className={({ isActive }) => isActive ? "text-yellow-500" : "text-white"} to='/my-toys'>My toys</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "text-yellow-500" : "text-white"} to='/add-a-toy'>Add a toy</NavLink></li>
            </>
      
        <li><NavLink className={({ isActive }) => isActive ? "text-yellow-500" : "text-white"} to='/blogs'>Blog</NavLink></li>
        
    </>
    return (
        <nav className="navbar justify-between py-0 fixed backdrop-blur-md top-0 left-0 z-20 bg-pink-600/20">
            <div className=" w-3/4 flex-row-reverse md:flex-row ">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow flex-col  rounded-box ">
                        <ul className="menu menu-horizontal ">
                            {navItems}
                        </ul>
                        {
                            user ?
                                <>
                                    <div className='flex items-center tooltip tooltip-left' data-tip={user.displayName}>
                                        <label htmlFor="modal-update" tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full " >
                                                <img src={user.photoURL} />

                                            </div>
                                        </label>
                                    </div>
                                    <button onClick={handelLogOut} className="btn btn-warning">Log out</button>
                                </>
                                :
                                <NavLink to="/login" className={({ isActive }) => isActive ? "text-yellow-500 btn btn-info" : "text-gray-900 btn btn-warning"} >Login</NavLink>}

                    </ul>
                </div>
                <Link to="/" className=" flex justify-between items-center border-none gap-3 px-2 text-xl font-extrabold tracking-wide ">
                    <img className='w-20 h-20'  src="https://i.ibb.co/27rgTMn/Logo.png" alt="" />
                    Sci-fi-toy</Link>
            </div>

            {/* For large devices */}

            <div className="navbar hidden md:flex justify-between">
                <ul className=" flex-nowrap menu menu-horizontal flex-grow-1">
                    {navItems}
                </ul>
                {
                    user ?
                        <div className=''>
                            <div className='flex items-center tooltip tooltip-left' data-tip={user.displayName}>
                                <label htmlFor="modal-update" tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full " >
                                        <img src={user.photoURL} />

                                    </div>
                                </label>
                            </div>
                            <button onClick={handelLogOut} className="btn btn-warning">Log out</button>
                        </div>
                        :
                        <NavLink to="/login" className={({ isActive }) => isActive ? "text-sky-500 btn btn-warning" : "text-gray-900 btn btn-warning"} >Login</NavLink>}
            </div>

            {/* For large devices */}



        </nav>
    );
};

export default Navbar;