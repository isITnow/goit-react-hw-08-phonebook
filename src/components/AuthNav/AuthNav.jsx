import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiUserCheck } from 'react-icons/fi';
import { FiUserPlus } from 'react-icons/fi';

// import PropTypes from 'prop-types';

import s from './authNav.module.css';
const getActiveClassName = ({ isActive }) => {
    return isActive ? `${s.item} ${s.active}` : s.item;
};

const AuthNav = () => {
    return (
        <div>
            <NavLink className={getActiveClassName} to="/register">
                <FiUserPlus /> Register
            </NavLink>
            <NavLink className={getActiveClassName} to="/login">
                <FiUserCheck /> Login
            </NavLink>
        </div>
    );
};

export default AuthNav;
// AuthNav.propTypes = {};
