import React, {useContext} from "react";
import {Link} from "react-router";
import {FaAngleDoubleLeft} from "react-icons/fa";
import {AuthContext} from "../provider/AuthProvider";
import {toastError, toastSuccess} from "../components/toast";

function Login() {
    const {login} = useContext(AuthContext);
    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
        console.log(form[0].value, form[1].value);
        const email = form[0].value;
        const password = form[1].value;
        try {
            const res = await login(email, password);
            console.log(res);
            if (res.success) {
                toastSuccess("Login successful");
            } else {
                toastError(res.error);
            }
        } catch (error) {
            console.error(error);
        }
        form.reset();
    };

    return (
        <section className='w-full h-screen  flex items-center justify-center bg-gradient-to-bl from-[#f0f4ff] to-[#e0e7ff]'>
            <div className='flex items-center justify-center w-[80%] h-[80%]  rounded-2xl shadow-lg overflow-hidden bg-white/80'>
                <div className='img-bg-1 w-1/2 h-full relative'>
                    <Link to='/'>
                        <div className='flex justify-start items-center absolute bottom-4 left-4 bg-black/10 '>
                            <img
                                src='./logo.png'
                                alt='HandsOn Logo'
                                className='h-16 w-16'
                            />
                            <h1 className='text-3xl font-bold ml-2 text-white'>
                                HandsOn
                            </h1>
                        </div>
                    </Link>
                </div>
                <div className='w-1/2 px-18 space-y-6 py-18 self-start'>
                    <p className='l font-bold text-gray-700'>
                        <Link to='/' className='flex items-cente gap-1 '>
                            <FaAngleDoubleLeft className='text-xl text-primary font-black' />{" "}
                            Back to Home
                        </Link>
                    </p>
                    <h2 className='text-xl font-semibold  my-4'>
                        Welcome Back!
                        <br /> Join us again to make a difference.
                    </h2>
                    <h1 className='text-4xl font-bold mb-8'>Login</h1>
                    <form
                        className='flex flex-col gap-4'
                        onSubmit={handleLogin}
                    >
                        <input
                            type='text'
                            placeholder='Email'
                            required
                            className='border border-gray-300 p-2 rounded '
                        />
                        <input
                            type='password'
                            placeholder='Password'
                            required
                            className='border border-gray-300 p-2 rounded'
                        />
                        <button className='btn my-8 hover:bg-green-400 transition-all duration-300 ease-in-out'>
                            Login
                        </button>
                    </form>
                    <p className='mt-4 text-center'>
                        Don't have an account?{" "}
                        <Link to='/register' className='text-green-700'>
                            Register here
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Login;
