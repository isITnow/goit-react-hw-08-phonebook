import React from 'react';
// import PropTypes from 'prop-types';

// import s from './registerPage.module.css';

const RegisterPage = () => {
    return (
        <div>
            <h1>Registration form</h1>

            <form
                onSubmit={console.log('RegForm Click')}
                className="#"
                autoComplete="off"
            >
                <label className="#">
                    Имя
                    <input
                        type="text"
                        name="name"
                        // value={}
                        onChange={console.log}
                    />
                </label>

                <label className="#">
                    Email
                    <input
                        type="email"
                        name="email"
                        // value={email}
                        onChange={console.log}
                    />
                </label>

                <label className="#">
                    Пароль
                    <input
                        type="password"
                        name="password"
                        // value={password}
                        onChange={console.log}
                    />
                </label>

                <button type="submit">Registration</button>
            </form>
        </div>
    );
};

export default RegisterPage;
// RegisterPage.propTypes = {};
