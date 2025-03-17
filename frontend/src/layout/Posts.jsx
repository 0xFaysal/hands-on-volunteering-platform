import React from "react";
import HelpPost from "../components/HelpPost";

function Posts() {
    return (
        <section className='flex flex-col items-center justify-center w-full mt-24 bg-gray-100'>
            <div className='flex items-center justify-between w-full px-16 pt-6 pb-2 bg-gradient-to-b from-gray-100 to-white shadow-md rounded-lg '>
                <h1 className='text-3xl font-semibold text-gray-800'>
                    Recent Posts
                </h1>
                <button className='bg-green-500 font-semibold text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors duration-300 ease-in-out'>
                    + Create New Post
                </button>
            </div>
            <div className='flex flex-col items-center justify-center w-full mt-6'>
                <div className='flex flex-col  items-center w-[85%] justify-center gap-6'>
                    <HelpPost />
                    <HelpPost />
                    <HelpPost />
                    <HelpPost />
                    <HelpPost />
                    <HelpPost />
                    <HelpPost />
                    <HelpPost />
                    <HelpPost />
                </div>
                <div className='flex items-center justify-center w-full mt-6'>
                    <button className='bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors duration-300 ease-in-out'>
                        Load More
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Posts;

// no posts available ui
{
    /* <div className='flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-8 w-[600px] h-fit hover:scale-105 transition-transform duration-300 ease-in-out'>
         <h2 className='text-2xl font-semibold text-gray-800 mb-2'>Posts </h2>
         <p className='text-gray-600 mb-4'>No posts available</p>
        </div> */
}
