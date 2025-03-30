import React, {useState, useRef} from "react";
("react");
import img from "/skill.svg";
import {TbPlayerTrackNext} from "react-icons/tb";
import {toastWarning} from "../components/toast";

function AddSkill() {
    const [skills, setSkills] = useState(["LeaderShip", "Teamwork"]);
    const [newSkill, setNewSkill] = useState("");

    const [step, setStep] = useState(1); // Add this line

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevent form submission
            if (newSkill.trim()) {
                if (skills.includes(newSkill.trim())) {
                    toastWarning("Skill already added!");
                    setNewSkill(""); // Clear input if skill already exists
                    return; // Prevent adding duplicate skill
                }
                setSkills([...skills, newSkill.trim()]);
                setNewSkill(""); // Clear input after adding
            }
        }
    };

    return (
        <section className='w-full h-screen flex justify-center items-center bg-gray-100'>
            {step === 1 ? (
                <ProfilePictureUpload onNext={() => setStep(2)} />
            ) : (
                <AddSkillSection
                    skills={skills}
                    setSkills={setSkills}
                    newSkill={newSkill}
                    setNewSkill={setNewSkill}
                    handleKeyDown={handleKeyDown}
                    onBack={() => setStep(1)} // Add this line to handle back step
                />
            )}
        </section>
    );
}

//add skill functionality
function AddSkillSection({
    skills,
    setSkills,
    newSkill,
    setNewSkill,
    handleKeyDown,
    onBack,
}) {
    return (
        <div className='flex  items-center justify-center bg-white shadow-lg rounded-lg p-8 w-[90%] h-[90%]'>
            <div className='w-1/2 h-full flex justify-center items-center p-16'>
                <img src={img} alt='skill illustration' />
            </div>
            <div className='w-1/2 h-full flex flex-col justify-center items-center'>
                <form action='/api/skill' method='POST' className='w-full '>
                    <div>
                        <h1 className='text-3xl font-bold mb-4'>
                            Add Your Skills
                        </h1>
                        <p className='text-gray-600 mb-4'>
                            Please add your skills to help us understand your
                            expertise.
                        </p>
                    </div>
                    <div className=' w-full  p-4'>
                        <h1 className='text-xl font-bold mb-4'>Add Skill</h1>
                        <div className='mb-4 flex gap-2  flex-wrap '>
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className='flex items-center   py-1 px-4 gap-2 justify-center  bg-green-200 rounded-3xl select-none'
                                >
                                    <span className='text-sm font-semibold'>
                                        {skill}
                                    </span>
                                    <button
                                        type='button'
                                        onClick={() => {
                                            const updatedSkills = skills.filter(
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
                    <div className='flex gap-4 items-center justify-center w-full'>
                        <button
                            className='bg-green-600 text-white font-semibold px-16 py-2 rounded-lg flex items-center justify-center place-self-center mt-12'
                            onClick={onBack} // Add this line to handle back step
                            type='button'
                        >
                            <TbPlayerTrackNext className='inline-block mr-2 rotate-180' />
                            <span className='text-lg'>Previous</span>
                        </button>

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
    );
}

// add profile picture upload functionality
function ProfilePictureUpload({onNext}) {
    const [selectedImage, setSelectedImage] = useState(
        "https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
    );
    const [fileName, setFileName] = useState("");
    const [error, setError] = useState("");
    const fileInputRef = useRef(null); // Add this line
    const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB in bytes

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > MAX_FILE_SIZE) {
                setError("File size exceeds 2MB limit");
                return;
            }
            setError(""); // Clear any previous errors
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
            setFileName(file.name);
        }
    };

    return (
        <div className='flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8 w-[60%] h-[80%]'>
            <img
                src={selectedImage}
                alt='profile picture'
                className='w-32 h-32 rounded-full mb-4 object-cover'
            />
            {/* Move file input here, outside of conditional rendering */}
            <input
                ref={fileInputRef}
                type='file'
                className='hidden'
                name='profilePicture'
                accept='image/*'
                onChange={handleImageChange}
            />
            {error && (
                <div className='w-full max-w-sm mb-4 bg-red-50 border-l-4 border-red-500 p-4 rounded-md'>
                    <div className='flex items-center'>
                        <svg
                            className='w-6 h-6 text-red-500 mr-2'
                            fill='none'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'></path>
                        </svg>
                        <p className='text-red-600 font-medium'>{error}</p>
                    </div>
                </div>
            )}
            {!fileName ? (
                <>
                    <h1 className='text-xl font-bold mb-4'>
                        Upload Profile Picture
                    </h1>
                    <button
                        onClick={() => fileInputRef.current.click()} // Update this line
                        className='flex items-center justify-center'
                    >
                        <label className='flex flex-col items-center px-4 py-6 bg-white text-green-600 rounded-lg shadow-lg tracking-wide uppercase border border-green-600 cursor-pointer hover:bg-green-600 hover:text-white transition-all duration-300'>
                            <svg
                                className='w-8 h-8'
                                fill='currentColor'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                            >
                                <path d='M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z' />
                            </svg>
                            <span className='mt-2 text-base leading-normal'>
                                Select a photo
                            </span>
                        </label>
                    </button>
                </>
            ) : (
                <div className='text-center'>
                    <h1 className='text-xl font-bold mb-2'>Selected Photo</h1>
                    <div className='bg-green-50 rounded-lg p-4 mb-4'>
                        <p className='text-green-600 font-medium'>{fileName}</p>
                    </div>
                    <button
                        onClick={() => fileInputRef.current.click()} // Update this line
                        className='text-green-600 hover:text-green-700 underline text-sm'
                    >
                        Change Photo
                    </button>
                </div>
            )}
            <div className='mt-8'>
                <button
                    onClick={onNext}
                    className='bg-green-600 text-white font-semibold px-16 py-2 rounded-lg flex items-center justify-center'
                >
                    <span className='text-lg'>Next</span>
                    <TbPlayerTrackNext className='inline-block ml-2' />
                </button>
            </div>
        </div>
    );
}

export default AddSkill;
