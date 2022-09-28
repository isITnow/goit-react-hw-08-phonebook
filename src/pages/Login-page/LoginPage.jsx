import { useState } from 'react';
// import PropTypes from 'types';

import s from './loginPage.module.css';

const LoginPage = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = evt => {
        const { name, value } = evt.target;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'password':
                setPassword(value);
                break;

            default:
                break;
        }
    };

    const handleFormsubmit = evt => {
        evt.preventDefault();
        console.log('Login submit');
        formReset();
    };

    const formReset = () => {
        setName('');
        setPassword('');
    };

    return (
        <div>
            <h2>Login</h2>
            <form
                onSubmit={handleFormsubmit}
                className={s.form}
                autoComplete="on"
            >
                <label className={s.label}>
                    Name
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                    />
                </label>
                <label className={s.label}>
                    Password
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
// LoginPage.propTypes = {};
