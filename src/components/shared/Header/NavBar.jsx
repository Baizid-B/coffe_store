import { Link, NavLink } from "react-router-dom";
import './Nav.css'

const NavBar = () => {

    const link = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/coffees'>coffees</NavLink>
        <NavLink to='/Deshboard'>Deshboard</NavLink>
    </>

    return (
        <div className="navbar backdrop-blur-xl bg-white/30 shadow-sm z-50 fixed">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {link}
                </ul>
                </div>
                <Link to='/'><h1 className="text-xl">coffee_store</h1></Link>
            </div>

            <div className="navbar-end hidden lg:flex"> {/*menu menu-horizontal px-1 gap-8 capitalize*/}
                <ul className='*menu menu-horizontal px-1 gap-8 capitalize'> {/*{({isActive}) =>`${isActive ? 'text-warning' : 'hover:text-warning'}`}*/}
                    {link}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;