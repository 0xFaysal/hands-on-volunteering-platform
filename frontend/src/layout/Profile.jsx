import React from "react";

function Profile() {
    return (
        <section className='flex flex-col items-center justify-center bg-gray-100 min-h-screen'>
            <div className='flex flex-col items-center justify-center h-screen'>
                <h1 className='text-4xl font-bold mb-4'>Profile</h1>
                <p className='text-lg'>This is the profile page.</p>
            </div>
            <div className='flex justify-center items-center'>
                <img
                    src='https://via.placeholder.com/150'
                    alt='Profile'
                    className='rounded-full border-4 border-green-600'
                />
            </div>
        </section>
    );
}

export default Profile;
