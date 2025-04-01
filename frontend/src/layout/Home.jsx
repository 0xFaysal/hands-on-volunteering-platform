import React, {useContext} from "react";
import Hero from "../components/Hero";
import {FaTrophy} from "react-icons/fa";
import {AuthContext} from "../provider/AuthProvider";
import {FaBattleNet} from "react-icons/fa";
import {GrWorkshop} from "react-icons/gr";
import {TbLayersDifference} from "react-icons/tb";

function Home() {
    // const {user} = useContext(AuthContext);

    return (
        <section className='mt-24 w-full'>
            <Hero />
            {/* {user && (
                <div className='flex justify-center items-center mt-8'>
                    <h1 className='text-3xl font-bold text-gray-700'>
                        Welcome , {user.name}!
                    </h1>
                </div>
            )} */}

            <section className='bg-gray-100 p-8 text-center w-[95%] mx-auto mt-8'>
                <div className='max-w-full mx-auto'>
                    <h2 className='text-3xl font-bold mb-4'>
                        HandsOn - Help Your Community
                    </h2>
                    <p className='text-gray-600 mb-6 max-w-3xl mx-auto'>
                        HandsOn is a platform that connects volunteers with
                        social initiatives. We believe in the power of community
                        and the impact of collective action. Our mission is to
                        make volunteering accessible and rewarding for everyone.
                        Whether you want to help at local events, mentor others,
                        or contribute your skills, we have opportunities for
                        everyone.
                    </p>
                    <div className='grid md:grid-cols-3 gap-8'>
                        {[
                            {
                                icon: (
                                    <FaBattleNet className='text-green-600' />
                                ),
                                title: "Connect with Local Initiatives",

                                description:
                                    "Discover local initiatives that align with your interests and skills. Grow your network and make a difference.",
                            },
                            {
                                icon: <GrWorkshop className='text-green-600' />,
                                title: "Flexible Volunteering",
                                description:
                                    "Choose when and how you want to volunteer. We offer flexible opportunities to help you fit volunteering into your schedule.",
                            },
                            {
                                icon: (
                                    <TbLayersDifference className='text-green-600' />
                                ),
                                title: "Make a Difference",
                                description:
                                    "Your time and skills can have a profound impact on your community. Join us to create positive change . ",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className='bg-white rounded-lg shadow-md p-6'
                            >
                                <div className='mb-4 flex justify-center items-center font-bold text-green-600 text-4xl'>
                                    {item.icon}
                                </div>
                                <h3 className='text-xl font-semibold mb-2'>
                                    {item.title}
                                </h3>
                                <p className='text-gray-600'>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className='img-home-bg text-white p-8 text-center w-[95%] mx-auto mt-8 rounded-lg min-h-[600px]'>
                <h2 className='text-3xl font-bold mb-4'>
                    Ready to Make a Difference?
                </h2>
                <p className='mb-6'>
                    Join HandsOn today and start your volunteering journey. Sign
                    up now to explore opportunities that match your skills and
                    interests.
                </p>
                <a
                    href='/signup'
                    className='bg-white text-green-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300'
                >
                    Help Your Community
                </a>
            </section>

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
