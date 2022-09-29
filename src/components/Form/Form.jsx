import React, { useState } from 'react';
import { toast } from 'react-toastify';
import s from './Form.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addContactThunk } from 'redux/contacts/operations-contacts';
import {
    selectContacts,
    selectIsLoading,
} from 'redux/contacts/selector-contacts';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const Form1 = () => {
    const contacts = useSelector(selectContacts);
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleInputChange = evt => {
        const { name, value } = evt.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;

            default:
                break;
        }
    };

    const handleFormSubmit = evt => {
        evt.preventDefault();
        const nameToCheck = name.toLowerCase();
        const isIncludeName = contacts.some(
            contact => contact.name.toLowerCase() === nameToCheck
        );
        if (isIncludeName) {
            toast.warn(`${name} is already in contacts`, {
                autoClose: 2000,
            });
            return;
        }
        const profile = { name, number };
        dispatch(addContactThunk(profile));
        formReset();
    };

    const formReset = () => {
        setName('');
        setNumber('');
    };

    return (
        <div>
            <form className={s.form} onSubmit={handleFormSubmit}>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                        Name
                    </InputGroup.Text>
                    <Form.Control
                        value={name}
                        onChange={handleInputChange}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                        Number
                    </InputGroup.Text>
                    <Form.Control
                        value={number}
                        onChange={handleInputChange}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <Button disabled={isLoading} type="submit" variant="primary">
                    {isLoading ? 'Loading....' : 'Add contact'}
                </Button>
                {/* <label className="form__name">
                    Name
                    <input
                        className={s.form__input}
                        value={name}
                        onChange={handleInputChange}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label> */}
                {/* <label className="form__phone">
                    Number
                    <input
                        className={s.form__input}
                        value={number}
                        onChange={handleInputChange}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label> */}
                {/* <button
                    className={s.form__btn}
                    disabled={isLoading}
                    type="submit"
                >
                    Add contact
                </button> */}
            </form>
        </div>
    );
};

export default Form1;
