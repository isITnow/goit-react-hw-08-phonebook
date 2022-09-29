// import PropTypes from 'types';
// import s from './loginPage.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/operations-auth';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import Container from 'components/Container';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleInputChange = evt => {
        const { name, value } = evt.target;

        switch (name) {
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
            const loginData = { email, password };
            await dispatch(loginThunk(loginData)).unwrap();
            toast.success(`Happy to see You again`);
            navigate('/', { replace: true });
            formReset();
        } catch (error) {}
    };

    const formReset = () => {
        setEmail('');
        setPassword('');
    };

    return (
        <Container>
            <h2>Login</h2>
            <Form onSubmit={handleFormsubmit}>
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
                    Login
                </Button>
            </Form>
            {/* <form
                onSubmit={handleFormsubmit}
                className={s.form}
                autoComplete="on"
            >
                <label className={s.label}>
                    Name
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
                <button type="submit">Login</button>
            </form> */}
        </Container>
    );
};

export default LoginPage;
// LoginPage.propTypes = {};
