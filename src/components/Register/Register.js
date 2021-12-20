import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
const Register = () => {
    return (
        <div className="register-form">
            <div>
                <h2>Register Now</h2>
                <form onSubmit>
                    <input type="email" name="email"placeholder="Enter Your Email"/><br/>
                    <input type="password" name="password"placeholder="Enter Your Password"/><br/>
                    <input type="password" name="password"placeholder="Re-enter your password"/><br/>
                    <input type="submit" name="submit"value='Register'/><br/>
                </form>
                <p>Already have an account?<Link to="/login">Login</Link> </p>
                <div>---------or--------</div>
                <button className="btn-regular">Google Sign</button>
            </div>
        </div>
    );
};

export default Register;