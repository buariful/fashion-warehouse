import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Loading';


const Register = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPass, setConfirmPass] = useState();
    const [handleError, setHandleError] = useState();
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword,
        user,
        loading,
        error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })

    const handleEmail = event => {
        setEmail(event.target.value)
    }
    const handlePassword = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPass = event => {
        setConfirmPass(event.target.value)
    }


    const createUser = async event => {
        event.preventDefault();
        if (password !== confirmPass) {
            setHandleError('Please enter same password in "PASSWORD" and "CONFIRM PASSWORD field')
            return;
        }
        if (password.length < 6) {
            setHandleError("Please inter 6 or more digits password")
            return;
        }


        await createUserWithEmailAndPassword(email, password);
    }
    // firebase actions
    if (user) {
        navigate('/home');
    }
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
            <h1 className='text-3xl font-bold my-6'>Please Sign up first</h1>
            <div className='w-1/2 mx-auto bg-orange-300 py-5 rounded-lg mb-8'>
                <form>
                    <input onBlur={handleEmail} type="email" name="email" id="" placeholder='Enter your email' className='w-10/12 py-3 px-2 rounded-md mb-4' required /><br />

                    <input onBlur={handlePassword} type="password" name="password" id="" placeholder='Enter a password' className='w-10/12 py-3 px-2 rounded-md mb-4' required /> <br />

                    <input onBlur={handleConfirmPass} type="password" name="confirmPassword" id="" placeholder='Confirm your password' className='w-10/12 py-3 px-2 rounded-md mb-4' /> <br />

                    <input onClick={createUser} type="submit" value="Signup" className='py-3 w-1/2 bg-orange-600 text-white cursor-pointer rounded-lg' required />
                </form>
            </div>
            <p className='font-bold text-red-700'>{handleError}</p>
            <p className='my-3'>Already have an account ? Then <Link to="/login" className='font-bold text-orange-600'>Login</Link></p>
        </div>
    );
};

export default Register;