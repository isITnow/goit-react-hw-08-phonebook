import ContactsList from 'components/ContactsList';
import Container from 'components/Container';
import Filter from 'components/Filter';
import Form from 'components/Form';
import React from 'react';
// import PropTypes from 'prop-types';

// import s from './contactsPage.module.css';

const ContactsPage = () => {
    return (
        <Container>
            <h1>Phonebook</h1>
            <Form />
            <h2 className="contacts__title">Contacts</h2>
            <Filter />
            <ContactsList />
        </Container>
    );
};

export default ContactsPage;
// ContactsPage.propTypes = {};
