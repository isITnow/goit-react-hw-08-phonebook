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
import { useDispatch } from 'react-redux';

export const App = () => {
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(refreshUserThunk());
    // }, [dispatch]);

    return (
        <>
            <AppBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
            </Routes>
            {/* <Container>
                <h1>Phonebook</h1>
                <Form />
                <h2 className="contacts__title">Contacts</h2>
                <Filter />
                <ContactsList />
            </Container> */}
            <ToastContainer />
        </>
    );
};
