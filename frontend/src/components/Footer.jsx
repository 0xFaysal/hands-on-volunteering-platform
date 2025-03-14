import React from "react";

function Footer() {
    return (
        <footer>
            <section className='bg-dark text-light px-16 p-8 w-[96%] mx-auto rounded-2xl'>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col justify-center items-center grow'>
                        <div className='flex items-center gap-2 mb-1'>
                            <img
                                src='./logo.png'
                                alt='HandsOn Logo'
                                className='h-16 w-16'
                            />
                            <h2 className='text-3xl font-bold'>HandsOn</h2>
                        </div>
                        <p>A Community-Driven Social Volunteering Platform </p>
                        <button className='btn my-4 '>Join Now</button>
                    </div>

                    <div className='flex gap-16 grow justify-center items-start'>
                        <div>
                            <h3 className='text-2xl font-semibold'>Menu</h3>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact Us</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold'>
                                Follow Us
                            </h3>
                            <ul>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold'>
                                Contact Us
                            </h3>
                            <ul>
                                <li>
                                    Email:
                                    <a
                                        href='mailto:faysalfahim3@gmail.com'
                                        className='text-green-300 hover:underline'
                                    >
                                        faysalfahim3@gmail.com
                                    </a>
                                </li>
                                <li>Phone: +880 1234567890</li>
                                <li>Address: Dhaka, Bangladesh</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='flex items-center justify-between gap-4 mt-4'>
                    <p className='text-center text-sm'>
                        &copy; {new Date().getFullYear()} HandsOn. All rights
                        reserved.
                    </p>
                    <p className='text-center text-sm'>
                        Made with ❤️ by HandsOn Team
                    </p>
                    <div className='text-center text-sm !text-gray-400'>
                        <a href='#'>Terms and Conditions</a>
                        <span className='mx-2'>|</span>
                        <a href='#'>Privacy Policy</a>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
