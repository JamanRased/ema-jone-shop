import React from 'react';
import { useLocation, Link, useHistory } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import'./Login.css';


const Login = () => {
    const {handleGoogleSignIn} = useFirebase();

    const location = useLocation();
    console.log(location.state?.from);
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';

    const gollesign=()=>{
        handleGoogleSignIn()
        .then(result => {
            history.push(redirect_uri);
        })
    }

    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="email"placeholder="Enter Your Email"/><br/>
                    <input type="password" name="password"placeholder="Enter Your Password"/><br/>
                    <input type="submit" name="submit"value='Submit'/><br/>
                </form>
                <p>Are you new?<Link to="/register">Create a New Account</Link> </p>
                <div>---------or--------</div>
                <button onClick={gollesign} className="btn-regular">Google Sign</button>
            </div>
        </div>
    );
};

export default Login;