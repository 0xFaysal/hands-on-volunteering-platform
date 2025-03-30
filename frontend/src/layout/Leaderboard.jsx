import React from "react";
import first from "/first.png";
import second from "/second.png";
import third from "/third.png";

const fakedata = [
    {name: "User 1", time: 20, points: 1000},
    {name: "User 2", time: 19, points: 900},
    {name: "User 3", time: 18, points: 800},
    {name: "User 4", time: 17, points: 700},
    {name: "User 5", time: 16, points: 600},
    {name: "User 6", time: 15, points: 500},
    {name: "User 7", time: 14, points: 400},
    {name: "User 8", time: 13, points: 300},
    {name: "User 9", time: 12, points: 200},
    {name: "User 10", time: 11, points: 100},
    {name: "User 11", time: 10, points: 50},
    {name: "User 12", time: 9, points: 25},
    {name: "User 13", time: 8, points: 10},
    {name: "User 14", time: 7, points: 5},
    {name: "User 15", time: 6, points: 2},

    {name: "User 16", time: 5, points: 1},
    {name: "User 17", time: 4, points: 0},
    {name: "User 18", time: 3, points: 0},
    {name: "User 19", time: 2, points: 0},
    {name: "User 20", time: 1, points: 0},
    {name: "User 21", time: 0, points: 0},
];

function Leaderboard() {
    const padNumber = (num) => {
        return num.toString().padStart(2, "0");
    };

    return (
        <section className='flex flex-col items-center justify-center w-full mt-24 bg-gray-100'>
            <div className='flex items-center justify-between w-full px-16 pt-6 pb-2 bg-gradient-to-b from-gray-100 to-white shadow-md rounded-lg '>
                <h1 className='text-3xl font-semibold text-gray-800 mb-4'>
                    Leaderboard
                </h1>
                <div className='flex items-center gap-2'>
                    <span className=' font-semibold text-gray-800'>
                        Sort by:
                    </span>
                    <select className='ml-2 border border-gray-200 rounded-md p-2 px-4 bg-white focus:outline-none focus:ring-1 focus:ring-green-100'>
                        <option value='points'>Points</option>
                        <option value='time'>Time</option>
                        <option value='Rank'>Rank</option>
                    </select>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center w-full mt-6'>
                <div className='flex items-center justify-between mb-8 w-[90%] mx-auto px-4 py-2 bg-gray-100 rounded-lg shadow-md'>
                    <span className='text-lg font-semibold text-gray-800'>
                        User Name
                    </span>
                    <div className='flex items-center gap-26'>
                        <span className='text-lg font-semibold text-gray-800'>
                            Contribution Time
                        </span>
                        <span className='text-lg font-semibold text-gray-800'>
                            Points
                        </span>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center w-[85%] gap-6'>
                    {/* Placeholder for leaderboard items */}
                    {fakedata.map((item, index) => (
                        <div
                            key={index}
                            className={`flex items-center justify-between w-full  shadow-md rounded-lg p-4 hover:scale-103 transition-transform duration-300 ease-in-out border-green-600  ${
                                index % 2 === 0 ? "bg-green-50" : "bg-white"
                            } ${
                                index === 0
                                    ? "border-2  scale-104 hover:scale-108"
                                    : ""
                            }
                              ${
                                  index === 1
                                      ? "border scale-103 hover:scale-107"
                                      : ""
                              }
                              ${
                                  index === 2
                                      ? "border scale-102 hover:scale-106"
                                      : ""
                              }  
                            
                            `}
                        >
                            <div className='flex items-center gap-4'>
                                <span
                                    className={` font-bold ${
                                        index === 0
                                            ? "text-yellow-500 text-2xl"
                                            : index === 1
                                            ? "text-yellow-500 text-2xl"
                                            : index === 2
                                            ? "text-yellow-500 text-2xl"
                                            : "text-gray-800 text-lg"
                                    }`}
                                >
                                    #{index + 1}
                                </span>
                                {index === 0 && (
                                    <img
                                        src={first}
                                        alt='first'
                                        className='w-12 h-12'
                                    />
                                )}
                                {index === 1 && (
                                    <img
                                        src={second}
                                        alt='second'
                                        className='w-12 h-12'
                                    />
                                )}
                                {index === 2 && (
                                    <img
                                        src={third}
                                        alt='third'
                                        className='w-12 h-12'
                                    />
                                )}

                                <span className='text-lg font-semibold text-gray-800'>
                                    {item.name}
                                </span>
                            </div>
                            <div className='flex items-between gap-30'>
                                <span className='text-gray-600'>
                                    {padNumber(item.time)} hours
                                </span>
                                <span className='text-lg font-semibold text-green-600'>
                                    {item.points} points
                                </span>
                            </div>
                        </div>
                    ))}
                    {/* Add more leaderboard items as needed */}
                </div>
            </div>
            <div className='flex items-center justify-center w-full mt-6'>
                <button className='bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors duration-300 ease-in-out'>
                    Load More
                </button>
            </div>
        </section>
    );
}

export default Leaderboard;
