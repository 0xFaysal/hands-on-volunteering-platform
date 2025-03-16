import React, {useState} from "react";
import img from "/skill.svg";
import {TbPlayerTrackNext} from "react-icons/tb";

function AddSkill() {
    const [skills, setSkills] = useState(["LeaderShip", "Teamwork"]);
    const [newSkill, setNewSkill] = useState("");

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevent form submission
            if (newSkill.trim()) {
                setSkills([...skills, newSkill.trim()]);
                setNewSkill(""); // Clear input after adding
            }
        }
    };

    return (
        <section className='w-full h-screen flex justify-center items-center bg-gray-100'>
            <div className='flex  items-center justify-center bg-white shadow-lg rounded-lg p-8 w-[90%] h-[90%]'>
                <div className='w-1/2 h-full flex justify-center items-center p-16'>
                    <img src={img} alt='skill illustration' />
                </div>
                <div className='w-1/2 h-full flex flex-col justify-center items-center'>
                    <form action='/api/skill' method='POST' className='w-full '>
                        <div className=' w-full  p-4'>
                            <h1 className='text-xl font-bold mb-4'>
                                Add Skill
                            </h1>
                            <div className='mb-1 flex gap-2  flex-wrap'>
                                {skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className='flex items-center mb-4  py-1 px-4 gap-4 justify-center  bg-green-200 rounded-3xl select-none'
                                    >
                                        <span className='text-sm font-semibold'>
                                            {skill}
                                        </span>
                                        <button
                                            type='button'
                                            onClick={() => {
                                                const updatedSkills =
                                                    skills.filter(
                                                        (s, i) => i !== index
                                                    );
                                                setSkills(updatedSkills);
                                            }}
                                            className=' text-black text-base hover:text-red-500 select-none'
                                        >
                                            x
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <input
                                type='text'
                                name='skill'
                                placeholder='Skill Name'
                                value={newSkill}
                                onChange={(e) => setNewSkill(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className='border border-gray-300 rounded-lg p-2 mb-4 w-full'
                            />
                        </div>
                        <div className='w-full p-4'>
                            <h1 className='text-xl font-bold mb-4'>
                                Supported Causes:
                            </h1>
                            <select
                                name='cause'
                                className='border border-gray-300 rounded-lg p-2 mb-4 w-full'
                                required
                            >
                                <option value=''>Select a cause</option>
                                <option value='education'>Education</option>
                                <option value='health'>Health</option>
                                <option value='environment'>Environment</option>
                            </select>
                        </div>
                        <div>
                            <button
                                type='submit'
                                className='bg-green-600 text-white font-semibold px-16 py-2 rounded-lg flex items-center justify-center place-self-center mt-12'
                            >
                                <span className='text-lg'>Next</span>
                                <TbPlayerTrackNext className='inline-block ml-2' />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default AddSkill;
