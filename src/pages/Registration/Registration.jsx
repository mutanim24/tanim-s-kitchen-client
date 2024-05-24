import { useState } from "react";
import loginBG from "../../assets/Login-bg.jpg"
import { FaGoogle } from "react-icons/fa6";

const Registration = () => {
    const [passMatch, setPassMatch] = useState(true);

    const handleRegistration = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        if (password !== confirmPassword) {
            setPassMatch(false)
        }
        console.log(email, password, confirmPassword);
    }
    return (
        <div className="relative w-full h-[700px]">
            <img className="absolute inset-0 w-full h-full object-cover" src={loginBG} alt="Background" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-white opacity-90"></div>
            <div className="relative clear-star h-full w-full">
                <form onSubmit={handleRegistration} className="w-3/12 m-auto flex flex-col space-y-8 items-center justify-center h-full z-10">
                    <h1 className='text-5xl font-bold'>SIGN UP</h1>
                    <input name='email' type="email" placeholder="Email Address" className="input input-bordered w-full" />
                    <input name='password' type="password" placeholder="Password" className="input input-bordered w-full" />
                    <div className="w-full">
                        <input name='confirmPassword' type="password" placeholder="Confirm Password" className="input input-bordered w-full" />

                        {passMatch ? "" : <h5 className="absolute text-red-600">Password not match</h5>}
                    </div>
                    <button className='btn btn-primary w-full'>SIGN UP</button>
                    <button className='btn w-full flex items-center justify-center space-x-2'>
                        <FaGoogle />
                        <span>Login with Google</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Registration;