import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='text-center'>
            <h1 className='text-3xl font-bold my-6'>Log in</h1>
            <div className='w-1/2 mx-auto bg-orange-300 py-5 rounded-lg mb-8'>
                <form>
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