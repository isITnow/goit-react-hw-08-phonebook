import React from 'react';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';

import s from './authNav.module.css';
const getActiveClassName = ({ isActive }) => {
    return isActive ? `${s.item} ${s.active}` : s.item;
};

const AuthNav = () => {
    return (
        <div>
            <NavLink className={getActiveClassName} to="/register">
                Register
            </NavLink>
            <NavLink className={getActiveClassName} to="/login">
                Login
            </NavLink>
        </div>
    );
};

export default AuthNav;
// AuthNav.propTypes = {};
