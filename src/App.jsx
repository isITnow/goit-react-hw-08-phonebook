import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegisterPage from 'pages/Register-page';
import LoginPage from 'pages/Login-page';
import ContactsPage from 'pages/Contacts-page';
import HomePage from 'pages/Home-page';
import AppBar from 'components/AppBar';
import { refreshUserThunk } from 'redux/auth/operations-auth';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/selector-auth';

export const App = () => {
    const token = useSelector(selectToken);
    const dispatch = useDispatch();

    useEffect(() => {
        if (token) {
            dispatch(refreshUserThunk());
        }
    }, [dispatch, token]);

    return (
        <>
            <AppBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
            </Routes>
            <ToastContainer />
        </>
    );
};
