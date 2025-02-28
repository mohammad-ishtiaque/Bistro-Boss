import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
    const navOptions =
        <>
            <ul className="menu menu-horizontal px-1">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu">Menu</Link></li>
            </ul>
        </>

    const navOptions2 =
        <>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                </ul>
            </ul>
        </>
    return (
        <>
            <div className="navbar z-1  opacity-60 text-white shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        {navOptions2}
                    </div>
                    <Link to="/" className="">
                        <p className='uppercase text-xl'>BISTRO BOSS</p>
                        <p>Restaurant</p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    {navOptions}
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    )
}

export default Navbar
