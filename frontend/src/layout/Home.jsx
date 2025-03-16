import React, {useContext} from "react";
import Hero from "../components/Hero";
import {FaTrophy} from "react-icons/fa";
import {AuthContext} from "../provider/AuthProvider";

function Home() {
    const {user} = useContext(AuthContext);

    return (
        <section className='mt-24 w-full'>
            <Hero />
            {user && (
                <div className='flex justify-center items-center mt-8'>
                    <h1 className='text-3xl font-bold text-gray-700'>
                        Welcome back, {user.name}!
                    </h1>
                </div>
            )}

            {/* Community Section */}

            <section className='bg-white rounded-xl shadow-md p-8 text-center w-[95%] mx-auto mt-8'>
                <div className='max-w-3xl mx-auto'>
                    <FaTrophy className='h-12 w-12 text-green-600 mx-auto mb-6' />
                    <h2 className='text-3xl font-bold mb-4'>
                        Join the HandsOn Community
                    </h2>
                    <p className='text-gray-600 mb-6'>
                        HandsOn is a community-driven platform that connects
                        volunteers with social initiatives. Join us to make a
                        difference in your community and beyond. Whether you
                        want to help at local events, mentor others, or
                        contribute your skills, we have opportunities for
                        everyone.
                    </p>
                    <div className='grid md:grid-cols-3 gap-8'>
                        {[
                            {title: "Hours Contributed", value: "9,000+"},
                            {title: "Active Volunteers", value: "2,700+"},
                            {title: "Community Projects", value: "600+"},
                        ].map((stat, index) => (
                            <div key={index} className='p-4'>
                                <div className='text-3xl font-bold text-green-600 mb-2'>
                                    {stat.value}
                                </div>
                                <div className='text-gray-700'>
                                    {stat.title}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Home;
