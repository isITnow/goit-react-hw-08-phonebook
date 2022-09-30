import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiUserCheck } from 'react-icons/fi';
import { FiUserPlus } from 'react-icons/fi';
import s from './authNav.module.css';

const getActiveClassName = ({ isActive }) => {
    return isActive ? `${s.item} ${s.active}` : s.item;
};

const AuthNav = () => {
    return (
        <div className={s.box}>
            <NavLink className={getActiveClassName} to="/register">
                <FiUserPlus size={21} /> Register
            </NavLink>
            <NavLink className={getActiveClassName} to="/login">
                <FiUserCheck size={21} /> Login
            </NavLink>
        </div>
    );
};

export default AuthNav;
