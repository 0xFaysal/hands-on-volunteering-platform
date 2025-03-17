import React, {useState, useEffect, useContext} from "react";
import {Link, NavLink} from "react-router";
import {AuthContext} from "./../provider/AuthProvider";
import {CiMenuFries} from "react-icons/ci";

function Navbar() {
    const {user} = useContext(AuthContext);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll, {passive: true});

        // Cleanup listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className='w-full fixed top-0 z-50'>
            <div
                className={`flex justify-between items-center p-2 px-12 
                transition-all duration-500 ease-in-out
                ${
                    isScrolled
                        ? "bg-gray-800 text-white shadow-lg py-2"
                        : "bg-transparent text-black py-4 mt-2"
                }`}
            >
                <Link to='/' className='flex items-center'>
                    <div className='flex items-center gap-2'>
                        <img
                            src='./logo.png'
                            alt='Logo'
                            className='h-12 w-12'
                        />
                        <h1 className='text-2xl font-bold'>HandsOn</h1>
                    </div>
                </Link>
                <div className='hidden lg:block'>
                    <ul
                        className='flex gap-8 *:px-4
                *:py-2 '
                    >
                        <li className='text-lg font-semibold'>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li className='text-lg font-semibold'>
                            <NavLink to='/events'>Events</NavLink>
                        </li>
                        <li className='text-lg font-semibold'>
                            <NavLink to='/posts'>Community Post</NavLink>
                        </li>
                        <li className='text-lg font-semibold'>
                            <NavLink to='/leaderboard'>Leaderboard</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    {user ? (
                        <div className='hidden lg:flex gap-4 '>
                            <Link
                                to='/profile'
                                className='bg-green-600 text-white font-semibold px-4 py-2 rounded-lg'
                            >
                                Profile
                            </Link>
                        </div>
                    ) : (
                        <div className='hidden lg:flex gap-4'>
                            <Link
                                to='/login'
                                className='bg-blue-600 text-white px-4 py-2 rounded-lg'
                            >
                                Login
                            </Link>
                            <Link
                                to='/register'
                                className='bg-green-600 text-white px-4 py-2 rounded-lg'
                            >
                                Register
                            </Link>
                        </div>
                    )}
                </div>
                <div className='lg:hidden'>
                    <CiMenuFries className='h-8 w-8 text-gray-800' />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
