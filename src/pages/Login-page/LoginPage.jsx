import React from 'react';
// import PropTypes from 'types';

// import s './loginPage.module.css';

const LoginPage = () => {
    return (
        <div>
            <h2>Login</h2>
            <form
                onSubmit={console.log('RegForm Click')}
                className="#"
                autoComplete="on"
            >
                <label className="#">
                    Name
                    <input
                        type="text"
                        name="name"
                        // value={}
                        onChange={console.log}
                    />
                </label>
                <label className="#">
                    Password
                    <input
                        type="password"
                        name="password"
                        // value={password}
                        onChange={console.log}
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
// LoginPage.propTypes = {};
