import React from "react";

// Communities FakeData Rank
const RankFake = [
    {name: "Community 1", members: 100, activities: 5, points: 1000},
    {name: "Community 2", members: 50, activities: 3, points: 900},
    {name: "Community 3", members: 75, activities: 4, points: 800},
    {name: "Community 4", members: 30, activities: 2, points: 700},
    {name: "Community 5", members: 20, activities: 1, points: 600},
    {name: "Community 6", members: 10, activities: 0, points: 500},
    {name: "Community 7", members: 5, activities: 0, points: 400},
    {name: "Community 8", members: 3, activities: 0, points: 300},
    {name: "Community 9", members: 2, activities: 0, points: 200},
    {name: "Community 10", members: 1, activities: 0, points: 100},
];

// Communities card fake data
const CommunitiesFake = [
    {
        name: "BD Tech Community ",
        description:
            "We are a community of tech enthusiasts in Bangladesh. Join us to learn and grow together. Now we are adding more text to see how it wraps and fits within the card. This is a long description to test the layout and how it handles long text.",
        visibility: "Public",
        members: 100,
        activities: 5,
    },
    {
        name: "Community 2",
        description:
            "Description of Community 2. More details about the community and its activities.",
        visibility: "Public",
        members: 50,
        activities: 3,
    },
    {
        name: "Community 3",
        description:
            "Description of Community 3. More details about the community and its activities.",
        visibility: "Private",
        members: 75,
        activities: 4,
    },
    {
        name: "Clean Code Community Bangladesh",
        description:
            "Description of Community. More details about the community and its activities. This is a long description to test the layout and how it handles long text. Now we are adding more text to see how it wraps and fits within the card.",
        visibility: "Public",
        members: 30,
        activities: 2,
    },
    {
        name: "Community 5",
        description:
            "Description of Community 5. More details about the community and its activities.This is a long description to test the layout and how it handles long text. Now we are adding more text to see how it wraps and fits within the card.",
        visibility: "Private",
        members: 20,
        activities: 1,
    },
    {
        name: "Pet Lovers Community",
        description:
            "Description of Community 6. More details about the community and its activities.This is a long description to test the layout and how it handles long text. Now we are adding more text to see how it wraps and fits within the card.",
        visibility: "Public",
        members: 10,
        activities: 0,
    },
    {
        name: "Green Society Community",
        description:
            "Description of Community 7. More details about the community and its activities.This is a long description to test the layout and how it handles long text. Now we are adding more text to see how it wraps and fits within the card.",
        visibility: "Private",
        members: 5,
        activities: 0,
    },
    {
        name: "Community 8",
        description:
            "Description of Community 8. More details about the community and its activities.",
        visibility: "Public",
        members: 3,
        activities: 0,
    },
    {
        name: "Community 9",
        description:
            "Description of Community 9. More details about the community and its activities.",
        visibility: "Private",
        members: 2,
        activities: 0,
    },
];

function Communities() {
    return (
        <section className='flex flex-col items-center justify-center w-full mt-24 bg-gray-100'>
            <div className='flex items-center justify-between w-full px-16 pt-6 pb-2 bg-gradient-to-b from-gray-100 to-white shadow-md rounded-lg '>
                <h1 className='text-3xl font-semibold text-gray-800 mb-4'>
                    Communities
                </h1>
                <div className='flex items-center gap-4'>
                    <button className='bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200'>
                        Create Community
                    </button>
                </div>
            </div>

            {/* Community Cards Section */}
            {/* 3 card in one line grid mode card */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-[90%] mx-auto'>
                {CommunitiesFake.map((community, index) => (
                    <div
                        key={index}
                        className='flex flex-col items-start justify-start bg-white shadow-md rounded-lg p-8 hover:scale-103 transition-transform duration-300 ease-in-out'
                    >
                        <h2 className='text-2xl font-semibold text-gray-800 mb-2'>
                            {community.name}
                        </h2>
                        <p className='text-gray-600 mb-4 line-clamp-3'>
                            {community.description}
                        </p>
                        <div className='flex items-center justify-between w-full mt-4'>
                            <div className='flex items-center gap-4'>
                                <span className='text-gray-800 font-semibold'>
                                    👥Members: {community.members}
                                </span>
                                <span className='text-gray-800 font-semibold'>
                                    ✨Activities: {community.activities}
                                </span>
                            </div>
                            <span
                                className={`text-gray-800 font-semibold p-1 px-2 rounded-2xl ${
                                    community.visibility === "Public"
                                        ? "bg-green-100"
                                        : "bg-red-100"
                                }`}
                            >
                                {community.visibility === "Public"
                                    ? "🌍 Public"
                                    : "🔒 Private"}
                            </span>
                        </div>
                        <button className='mt-8 border-2 font-bold border-green-500 text-primary px-4 py-2 rounded-lg hover:border-green-600 transition duration-200 self-center'>
                            Join Community
                        </button>
                    </div>
                ))}
            </div>

            {/* Community Ranking  */}
            <div className='flex flex-col items-center justify-center w-[90%] mt-6 mx-auto bg-white shadow-md rounded-lg p-6'>
                <h2 className='text-4xl font-semibold text-gray-800 mb-4'>
                    Community Ranking
                </h2>
                <p className='text-lg text-gray-600 mb-4'>
                    Check out the top communities based on member count and
                    activity.
                </p>
                <div className='flex flex-col items-center justify-center w-full mt-6'>
                    <div className='flex items-center justify-end mb-8 w-[90%] mx-auto '>
                        <div>
                            <span className='text-base font-semibold text-gray-800'>
                                Sort by:
                            </span>
                            <select className='ml-2 border border-gray-200 rounded-md p-2 px-4 bg-white focus:outline-none focus:ring-1 focus:ring-green-100 '>
                                <option value='points'>Points</option>
                                <option value='members'>Members</option>
                                <option value='activities'>Activities</option>
                                <option value='rank'>Rank</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center w-[90%] gap-6'>
                        {/* Placeholder for community items */}
                        {RankFake.map((item, index) => (
                            <div
                                key={index}
                                className={`flex items-center justify-between w-full shadow-md rounded-lg p-4 hover:scale-103 transition-transform duration-300 ease-in-out border-green-600 ${
                                    index % 2 === 0 ? "bg-green-50" : "bg-white"
                                } ${
                                    index === 0
                                        ? "border-2 scale-101 hover:scale-103"
                                        : ""
                                }`}
                            >
                                <div className='flex items-center gap-4'>
                                    <span
                                        className={`font-bold ${
                                            index === 0
                                                ? "text-yellow-500 text-2xl"
                                                : "text-gray-800 text-lg"
                                        }`}
                                    >
                                        #{index + 1}
                                    </span>
                                    <div className='flex flex-col gap-2'>
                                        <span className='text-gray-800 text-xl font-bold'>
                                            {item.name}
                                        </span>
                                        <div className='flex items-center gap-4'>
                                            <span className='text-gray-800 text-lg'>
                                                👥 Members:{item.members}
                                            </span>
                                            <span className='text-gray-800 text-lg'>
                                                ✨Activities: {item.activities}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4 mr-16'>
                                    <span className='text-lg font-semibold text-gray-800'>
                                        🏆 Points: {item.points}
                                    </span>
                                </div>
                            </div>
                        ))}
                        {/* Add more community items as needed */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Communities;
