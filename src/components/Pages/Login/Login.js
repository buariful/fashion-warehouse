import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading';

const Login = () => {
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
    }
    // login action
    const location = useLocation();

    let from = location.state?.from?.pathname || '/home';
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, from, navigate])
    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        return <div className='min-h-screen flex justify-center items-center '>
            <h2 className='text-2xl font-bold text-red-500'> <span> {error.message}</span></h2>
            <Link to='/home' className='font-bol mt-5 ml-3 bg-primary text-white py-3 px-3 rounded-md hover:bg-gray-800'>Home</Link>
        </div>
    }
    return (
        <div className='text-center'>
            <h1 className='text-3xl font-bold my-6'>Log in</h1>
            <div className='w-1/2 mx-auto bg-orange-300 py-5 rounded-lg mb-8'>
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" id="" placeholder='Enter your email' className='w-10/12 py-3 px-2 rounded-md mb-4' /><br />
                    <input type="password" name="password" id="" placeholder='Enter a password' className='w-10/12 py-3 px-2 rounded-md mb-4' /> <br />

                    <input type="submit" value="Login" className='py-3 w-1/2 bg-orange-600 text-white cursor-pointer rounded-lg' />
                </form>
            </div>
            <p></p>
            <p className='my-3'>Do you need an account ? Then <Link to="/register" className='font-bold text-orange-600'>Register</Link></p>
        </div>
    );
};

export default Login;