import React from "react";

function HelpPost() {
    return (
        <div>
            <div className='flex flex-col items-start justify-center bg-white shadow-md rounded-lg p-8 w-[600px] h-fit hover:scale-105 transition-transform duration-300 ease-in-out'>
                <div className='flex items-center justify-between w-full mt-2'>
                    <div className='flex  flex-col  '>
                        <span className='text-gray-700 font-semibold text-lg'>
                            User Name
                        </span>
                        <span className='text-gray-500 text-sm'>
                            <span className='text-green-400'>• </span>1h ago
                        </span>
                    </div>
                    <div className='flex items-center justify-center'>
                        <span className='text-gray-600 px-4 bg-green-100 p-2 rounded-md text-sm font-semibold'>
                            Education
                        </span>
                    </div>
                </div>
                <h2 className='text-2xl font-semibold text-gray-800 mb-2'>
                    Event Title Goes Here For Testing
                </h2>
                <p className='text-gray-600 mb-4'>
                    Event description goes here. lorem ipsum dolor sit amet.
                    lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.
                </p>
                <div className='flex items-center justify-between w-full'>
                    <div>
                        <span className='text-gray-500 font-semibold'>
                            Time :{" "}
                        </span>
                        <span className='text-gray-500'>
                            2023-10-01 • 10:00 AM
                        </span>
                    </div>
                    <div className='flex items-center gap-2 text-base'>
                        {/* <FaLocationDot className='inline-block' /> */}
                        <span className='text-gray-500'>
                            Location, City, Country
                        </span>
                    </div>
                </div>

                <div className='flex items-center justify-between w-full mt-4'>
                    <div className='flex items-center gap-2 text-base'>
                        {/* <IoPeopleCircleOutline /> */}
                        <span className='text-gray-500'>
                            40 Volunteers Needed
                        </span>
                    </div>
                    <button className='bg-blue-500 text-white px-4 py-[6px] rounded-md hover:bg-blue-600 transition-colors duration-300 ease-in-out'>
                        Join Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HelpPost;
