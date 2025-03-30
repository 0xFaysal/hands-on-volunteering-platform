import {useContext} from "react";
import {Link, useNavigate} from "react-router";
import {FaAngleDoubleLeft} from "react-icons/fa";
import {AuthContext} from "../provider/AuthProvider";
import {toastError, toastWarning} from "../components/toast";

function Register() {
    const {register} = useContext(AuthContext);
    const redirect = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(formData);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        const {name, email, password, confirmPassword} = Object.fromEntries(
            formData.entries()
        );
        console.log(name, email, password, confirmPassword);
        if (password !== confirmPassword) {
            toastWarning("Passwords do not match");
            return;
        }
        register(name, email, password)
            .then((res) => {
                console.log(res);
                if (res.success) {
                    setTimeout(() => {
                        redirect("/add-skill");
                    }, 1000);
                } else {
                    toastError(res.error);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <section className='w-full h-screen  flex items-center justify-center bg-gradient-to-bl from-[#f0f4ff] to-[#e0e7ff]'>
            <div className='flex items-center justify-center w-[80%] h-[80%]  rounded-2xl shadow-lg overflow-hidden bg-white/80'>
                <div className='img-bg-2  w-1/2 h-full relative'>
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
                <div className='w-1/2 px-18 space-y-2 py-6 self-start'>
                    <p className='l font-bold text-gray-700'>
                        <Link to='/' className='flex items-cente gap-1 '>
                            <FaAngleDoubleLeft className='text-xl text-primary font-black' />{" "}
                            Back to Home
                        </Link>
                    </p>
                    <h2 className='text-xl font-semibold my-2'>
                        Welcome to HandsOn! <br /> Join us to make a difference.
                    </h2>
                    <p>Let's help ourselves and make happiness.</p>
                    <h1 className='text-4xl font-bold my-4'>Register</h1>
                    <form
                        className='flex flex-col gap-4'
                        onSubmit={handleSubmit}
                    >
                        <input
                            type='text'
                            placeholder='Name'
                            name='name'
                            required
                            className='border border-gray-300 p-2 rounded '
                        />
                        <input
                            type='text'
                            placeholder='Email'
                            name='email'
                            required
                            className='border border-gray-300 p-2 rounded '
                        />
                        <input
                            type='password'
                            placeholder='Password'
                            name='password'
                            required
                            className='border border-gray-300 p-2 rounded'
                        />
                        <input
                            type='password'
                            placeholder='Confirm Password'
                            name='confirmPassword'
                            required
                            className='border border-gray-300 p-2 rounded'
                        />
                        <button className='btn mt-8 mb-4 hover:bg-green-400 transition-all duration-300 ease-in-out'>
                            Login
                        </button>
                    </form>
                    <p className=' text-center'>
                        Already have an account?{" "}
                        <Link to='/login' className='text-green-700'>
                            Login Now
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Register;
