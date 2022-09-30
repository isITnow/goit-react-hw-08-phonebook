import React from 'react';
import s from './userMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutThunk } from 'redux/auth/operations-auth';
import { GrUserExpert } from 'react-icons/gr';
import Button from 'react-bootstrap/Button';
import { selectUserEmail } from 'redux/auth/selector-auth';

const UserMenu = () => {
    const dispatch = useDispatch();
    const userEmail = useSelector(selectUserEmail);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await dispatch(logoutThunk()).unwrap();
            navigate('/', { replace: true });
        } catch (error) {}
    };

    return (
        <div className={s.menu}>
            <span className={s.name}>
                <GrUserExpert size={23} /> {userEmail}
            </span>
            <Button
                onClick={handleLogout}
                variant="outline-primary"
                type="submit"
            >
                Logout
            </Button>
        </div>
    );
};

export default UserMenu;
