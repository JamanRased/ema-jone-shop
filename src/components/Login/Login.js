import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import'./Login.css';


const Login = () => {
    const {handleGoogleSignIn} = useFirebase();
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit>
                    <input type="email" name="email"placeholder="Enter Your Email"/><br/>
                    <input type="password" name="password"placeholder="Enter Your Password"/><br/>
                    <input type="submit" name="submit"value='Submit'/><br/>
                </form>
                <p>Are you new?<Link to="/register">Create a New Account</Link> </p>
                <div>---------or--------</div>
                <button onClick={handleGoogleSignIn} className="btn-regular">Google Sign</button>
            </div>
        </div>
    );
};

export default Login;