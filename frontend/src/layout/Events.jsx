import React from "react";
import EventPost from "../components/EventPost";

function Events() {
    return (
        <section className='flex flex-col items-center justify-center w-full mt-20 bg-gray-100'>
            <div className='w-full flex items-center justify-center gap-3 p-4 bg-gradient-to-b from-gray-100 to-white shadow-md rounded-md mb-4'>
                <input
                    type='text'
                    placeholder='Search for events...'
                    className='w-[60%] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <button className='ml-4 p-2 px-4 border-2 border-green-400 text-green-700 rounded-lg hover:bg-blue-700'>
                    Search
                </button>

                <select className='ml-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value='all'>All</option>
                    <option value='upcoming'>Upcoming</option>
                    <option value='past'>Past</option>
                    <option value='popular'>Popular</option>
                    <option value='nearby'>Nearby</option>
                </select>

                <button className='ml-4 p-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700'>
                    + Create New Event
                </button>
            </div>
            <div>
                <h1 className='text-3xl font-bold text-gray-800 my-8 px-28 '>
                    Upcoming Events
                </h1>
                <div className='flex flex-wrap justify-center gap-6 '>
                    <EventPost />
                    <EventPost />
                    <EventPost />
                    <EventPost />
                    <EventPost />
                    <EventPost />
                </div>
            </div>
        </section>
    );
}

export default Events;
