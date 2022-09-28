import React from 'react';
// import PropTypes from 'prop-types';
// import s from './userMenu.module.css';
import { useDispatch } from 'react-redux';
import { logOutThunk } from 'redux/auth/operations-auth';

import Button from 'react-bootstrap/Button';

const UserMenu = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logOutThunk());
    };

    return (
        <div>
            <span>Welcome User</span>
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
