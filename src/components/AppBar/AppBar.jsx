import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import { selectIsLoggedIn, selectToken } from 'redux/auth/selector-auth';
import { ThreeDots } from 'react-loader-spinner';
import s from './appBar.module.css';

const getActiveClassName = ({ isActive }) => {
    return isActive ? `${s.item} ${s.active}` : s.item;
};

const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const tokenStatus = useSelector(selectToken);

    return (
        <header className={s.header}>
            <div className={s.navigation}>
                <span class={s.icon}></span>
                <NavLink className={getActiveClassName} end to="/">
                    Phonebook
                </NavLink>
                {isLoggedIn && (
                    <NavLink className={getActiveClassName} to="/contacts">
                        Contacts
                    </NavLink>
                )}
            </div>
            {tokenStatus ? (
                isLoggedIn ? (
                    <UserMenu />
                ) : (
                    <ThreeDots
                        height="50"
                        width="50"
                        radius="9"
                        color="#5252f8"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        visible={true}
                    />
                )
            ) : (
                <AuthNav />
            )}
        </header>
    );
};

export default AppBar;
