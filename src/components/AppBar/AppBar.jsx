// import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthNav from 'components/AuthNav';

import s from './appBar.module.css';
import UserMenu from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selector-auth';

const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <header className={s.header}>
            <NavLink to="/">Homepage</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
};

export default AppBar;
// AppBar.propTypes = {};
