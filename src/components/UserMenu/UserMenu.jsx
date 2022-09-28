import React from 'react';
// import PropTypes from 'prop-types';

// import s from './userMenu.module.css';

const UserMenu = () => {
    return (
        <div>
            <span>Welcome User</span>
            <button type="button" onClick={console.log('Click')}>
                Logout
            </button>
        </div>
    );
};

export default UserMenu;
// UserMenu.propTypes = {};
