import React from 'react';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';

// import s from './authNav.module.css';

const AuthNav = () => {
    return (
        <div>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
        </div>
    );
};

export default AuthNav;
// AuthNav.propTypes = {};
