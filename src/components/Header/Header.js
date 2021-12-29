import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import useFirebase from '../hooks/useFirebase';
import './Header.css';

const Header = () => {
    const {user, logOut} = useFirebase();
    return (
        <div className="header">
        <img className="logo" src={logo} alt="" />
        <nav>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/orderreview">Order Review</NavLink>
            <NavLink to="/inventory">Manage Inventory</NavLink>
            {user.email && <span style={{ color: 'white' }}>Hello {user.displayName} </span>}
            {
                user.email ?
                    <button onClick={logOut}>log out</button>
                    :
                    <NavLink to="/login">Login</NavLink>}
        </nav>
    </div>
);
};

export default Header;