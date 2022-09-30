// import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import { selectIsLoggedIn } from 'redux/auth/selector-auth';
import s from './appBar.module.css';

const getActiveClassName = ({ isActive }) => {
    return isActive ? `${s.item} ${s.active}` : s.item;
};

const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    // const tokenStatus = useSelector(selectToken);

    return (
        <header className={s.header}>
            <div className={s.navigation}>
                <NavLink className={getActiveClassName} end to="/">
                    Phonebook
                </NavLink>
                {isLoggedIn && (
                    <NavLink className={getActiveClassName} to="/contacts">
                        Contacts
                    </NavLink>
                )}
            </div>
            {/* {tokenStatus || <AuthNav /> ? <UserMenu /> : <p>Loading....</p>} */}
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
};

export default AppBar;
