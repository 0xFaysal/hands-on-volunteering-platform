import React from "react";
import {FaLocationDot} from "react-icons/fa6";
import {IoPeopleCircleOutline} from "react-icons/io5";

function EventPost() {
    const data = {
        id: 1,
        postUpdateBy: "User Name",
        postUpdateAt: "1h ago",
        catagory: "Education",
        title: "Event Title Goes Here For Testing",
        description:
            "Event description goes here. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.",
        date: "2023-10-01",
        time: "10:00 AM",
        location: "Location, City, Country",
        category: "Category",
        totalVolunteersNeeded: 40,
        totalVolunteersJoined: 10,
    };

    return (
        <div>
            <div className='flex flex-col items-start justify-center bg-white shadow-md rounded-lg p-8 w-[600px] h-fit hover:scale-105 transition-transform duration-300 ease-in-out'>
                <div className='flex items-center justify-between w-full mt-2'>
                    <div className='flex  flex-col  '>
                        <span className='text-gray-700 font-semibold text-lg'>
                            {data.postUpdateBy}
                        </span>
                        <span className='text-gray-500 text-sm'>
                            <span className='text-green-400'>• </span>
                            {data.postUpdateAt}
                        </span>
                    </div>
                    <div className='flex items-center justify-center'>
                        <span className='text-gray-600 px-4 bg-green-100 p-2 rounded-md text-sm font-semibold'>
                            {data.catagory}
                        </span>
                    </div>
                </div>
                <h2 className='text-2xl font-semibold text-gray-800 mb-2'>
                    {data.title}
                </h2>
                <p className='text-gray-600 mb-4'>{data.description}</p>
                <div className='flex items-center justify-between w-full'>
                    <div>
                        <span className='text-gray-500 font-semibold'>
                            Time :{" "}
                        </span>
                        <span className='text-gray-500'>
                            {data.date} • {data.time}
                        </span>
                    </div>
                    <div className='flex items-center gap-2 text-base'>
                        <FaLocationDot className='inline-block' />
                        <span className='text-gray-500'>{data.location}</span>
                    </div>
                </div>

                <div className='flex items-center justify-between w-full mt-4'>
                    <span className='text-gray-500'>
                        Updated at: {data.postUpdateAt}
                    </span>
                </div>
                <div className='mt-4 flex items-center justify-between w-full'>
                    <div className='flex items-center gap-2 text-base'>
                        <IoPeopleCircleOutline className='inline-block font-bold text-2xl' />
                        <span className='text-gray-500 font-semibold'>
                            Needed: {data.totalVolunteersNeeded} | Joined:{" "}
                            {data.totalVolunteersJoined}
                        </span>
                    </div>
                    <button className=' p-2  bg-green-600 text-white rounded-md hover:bg-green-700'>
                        Join Event
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EventPost;
