import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { refreshUserThunk } from 'redux/auth/operations-auth';
import { selectToken } from 'redux/auth/selector-auth';

import AppBar from 'components/AppBar';
const HomePage = lazy(() => import('pages/Home-page'));
const RegisterPage = lazy(() => import('pages/Register-page'));
const LoginPage = lazy(() => import('pages/Login-page'));
const ContactsPage = lazy(() => import('pages/Contacts-page'));

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
            <Suspense fallback={null}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/contacts" element={<ContactsPage />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Suspense>
            <ToastContainer autoClose={2000} />
        </>
    );
};
