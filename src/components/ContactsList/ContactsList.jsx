import s from './ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { ContactsItem } from '././ContactsItem';
import { fetchContactsThunk } from 'redux/contacts/operations-contacts';
import { selectContacts, selectFilter } from 'redux/contacts/selector-contacts';

import ListGroup from 'react-bootstrap/ListGroup';

const ContactsList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContactsThunk());
    }, [dispatch]);

    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);

    const filteredContacts = useMemo(() => {
        const normalizedContacts = filter.toLowerCase();
        return contacts.filter(({ name }) =>
            name.toLowerCase().includes(normalizedContacts)
        );
    }, [contacts, filter]);

    if (!contacts.length) {
        return <p className={s.text}>List is empty</p>;
    }

    if (!filteredContacts.length) {
        return <p className={s.text}>User not found</p>;
    }

    return (
        <div>
            <ListGroup variant="flush">
                {filteredContacts.map(({ name, number, id }) => {
                    return (
                        <ListGroup.Item key={id}>
                            <ContactsItem name={name} phone={number} id={id} />
                        </ListGroup.Item>
                    );
                })}
            </ListGroup>
        </div>
    );
};

export default ContactsList;
