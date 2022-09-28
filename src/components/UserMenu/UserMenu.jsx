import React from 'react';
// import PropTypes from 'prop-types';
// import s from './userMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/auth/operations-auth';
import { FaRegUserCircle } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import { selectUserEmail } from 'redux/auth/selector-auth';

const UserMenu = () => {
    const dispatch = useDispatch();
    const userEmail = useSelector(selectUserEmail);

    const handleLogout = () => {
        dispatch(logoutThunk());
    };

    return (
        <div>
            <span>
                {' '}
                <FaRegUserCircle /> User: {userEmail}
            </span>
            {/* <button type="button" onClick={console.log('Click')}>
                Logout
            </button> */}
            <Button onClick={handleLogout} variant="primary" type="submit">
                Logout
            </Button>
        </div>
    );
};

export default UserMenu;
// UserMenu.propTypes = {};
