import React, {useState, useEffect} from "react";

function Navbar() {
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
                <div className='flex items-center gap-2'>
                    <img src='./logo.png' alt='Logo' className='h-12 w-12' />
                    <h1 className='text-2xl font-bold'>HandsOn</h1>
                </div>
                <ul className='flex gap-8'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>

                <button className='btn'>Join Now</button>
            </div>
        </nav>
    );
}

export default Navbar;
