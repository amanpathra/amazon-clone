import React, { useState } from 'react';
import '../css/Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase/firebase';

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/')
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth)=>{
                // It successfullly created a new user with user and password
                console.log(auth)
                navigate('/');
            })
            .catch((error)=>{
                console.log(error.message)
            })
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form action="">
                    <h5>Email</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button className='login__signInButton' onClick={signIn} type='submit'>Sign In</button>
                </form>

                <p>By signing-in, you agree to Amazon Fake Clone conditions of use & sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

                <p className='login__newSeparator'><span>New to Amazon?</span></p>

                <button className='login__registerButton' onClick={register}>Create your Amazon Account</button>
            </div>

        </div>
    )
}

export default Login;