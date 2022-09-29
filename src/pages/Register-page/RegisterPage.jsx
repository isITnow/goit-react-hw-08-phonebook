// import PropTypes from 'prop-types';
// import s from './rogisterPage.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { registerThunk } from 'redux/auth/operations-auth';
import { toast } from 'react-toastify';
import Container from 'components/Container';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const dispatch = useDispatch();

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

    const handleFormsubmit = async evt => {
        evt.preventDefault();
        try {
            const profile = { name, email, password };
            await dispatch(registerThunk(profile)).unwrap();
            toast.success(`Welcome, ${name}`);
            navigate('/', { replace: true });
            formReset();
        } catch (error) {}
    };

    const formReset = () => {
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <Container>
            <h2>Registration form</h2>

            <Form onSubmit={handleFormsubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        placeholder="Enter email"
                        required
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        placeholder="Password"
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            {/* <form
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

                <button type="submit">Registration</button> */}
            {/* </form> */}
        </Container>
    );
};

export default RegisterPage;
// RegisterPage.propTypes = {};
