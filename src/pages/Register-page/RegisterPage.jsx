import { useState } from 'react';
// import PropTypes from 'prop-types';

import s from './rogisterPage.module.css';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = evt => {
        const { name, value } = evt.target;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
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
        console.log('Send form');
        formReset();
    };

    const formReset = () => {
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <h2>Registration form</h2>

            <form
                onSubmit={handleFormsubmit}
                className={s.form}
                autoComplete="off"
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
                    Email
                    <input
                        type="email"
                        name="email"
                        value={email}
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

                <button type="submit">Registration</button>
            </form>
        </div>
    );
};

export default RegisterPage;
// RegisterPage.propTypes = {};
