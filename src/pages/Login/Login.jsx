import React, { useContext, useState } from 'react';
import loginBG from "../../assets/Login-bg.jpg"
import { FaGoogle } from "react-icons/fa6";
import useAuth from '../../hooks/useAuth';
import { GiH2O } from 'react-icons/gi';
import { getAuth, signOut } from 'firebase/auth';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaGithub } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const {googleLogin, githubLogin, signInUser,  user} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";

    // const {googleLogin} = useAuth();
    // const [loginUser, setLoginUser] = useState(null)

    const handleGoogleSignIn = () => {
        googleLogin()
        .then(result => {
            console.log(result.user);
            navigate(from)
            // setLoginUser(result.user.displayName)
        })
        .catch(err => {
            console.log(err.message);
        })
    }

    const handleGithubSignIn = () => {
        githubLogin()
        .then(result => {
            console.log(result.user);
            navigate(from)
        })
        .catch(err => {
            console.log(err.message);
        })
    }

    

    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value; 
        const password = form.password.value; 
        // console.log(email, password);
        signInUser(email, password)
        .then((userCredential) => {
            console.log(userCredential.user);
            navigate(from)
        })
        .catch(err => {
            console.log(err.message);
        })
    }
    return (
        <div className="relative w-full h-[700px]">
            <img className="absolute inset-0 w-full h-full object-cover" src={loginBG} alt="Background" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-white opacity-90"></div>
            <form onSubmit={handleLogin} className="relative flex flex-col space-y-8 items-center justify-center h-full z-10">
                
                <h1 className='text-5xl font-bold'>LOGIN</h1>
                <input name='email' type="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                <input name='password' type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                <button className='btn btn-primary w-full max-w-xs'>LOG IN</button>
                <button onClick={handleGoogleSignIn} className='btn w-full max-w-xs flex items-center justify-center space-x-2'>
                    <FaGoogle />
                    <span>Login with Google</span>
                    
                </button>
                

                <button onClick={handleGithubSignIn} className='btn w-full max-w-xs flex items-center justify-center space-x-2'>
                <FaGithub />
                    <span>Login with Github</span>
                    
                </button>
            </form>
        </div>

    );
};

export default Login;