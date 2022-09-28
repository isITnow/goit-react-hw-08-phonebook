// import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthNav from 'components/AuthNav';

import s from './appBar.module.css';

const AppBar = () => {
    return (
        <header className={s.header}>
            <NavLink to="/">Homepage</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
            <AuthNav />
        </header>
    );
};

export default AppBar;
// AppBar.propTypes = {};
