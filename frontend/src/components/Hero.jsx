import React from "react";

function Hero() {
    return (
        <section className='w-full'>
            <div className='img-bg w-[96%] min-h-160 mx-auto rounded-2xl relative'>
                <div className='flex items-center justify-between w-full  gap-2  absolute z-10 bottom-2 px-12 '>
                    <div className='flex items-center gap-2'>
                        <h1 className='text-[9rem] font-black  font-primary  text-white '>
                            HandsOn
                        </h1>
                        <div className='flex flex-col justify-center items-start mt-6'>
                            {" "}
                            <p className='text-4xl font-bold text-white'>
                                Help{" "}
                            </p>
                            <p className='text-4xl font-bold text-white'>
                                People
                            </p>
                        </div>
                    </div>
                    <button className='btn text-2xl font-bold mt-8 '>
                        Join Volunteering Events
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
