import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { ContactsItem } from '././ContactsItem';
import { fetchContactsThunk } from 'redux/contacts/operations-contacts';
// import { FallingLines } from 'react-loader-spinner';
// import s from './ContactsList.module.css';
import {
    selectContacts,
    selectFilter,
    // selectIsLoading,
} from 'redux/contacts/selector-contacts';

import ListGroup from 'react-bootstrap/ListGroup';

const ContactsList = () => {
    // const isLoading = useSelector(selectIsLoading);
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

    // if (isLoading) {
    //     return (
    //         <FallingLines
    //             color="#424242"
    //             width="100"
    //             visible={true}
    //             ariaLabel="falling-lines-loading"
    //         />
    //     );
    // }

    if (!contacts.length) {
        return <p>List is empty</p>;
    }

    if (!filteredContacts.length) {
        return <p>User not found</p>;
    }

    return (
        <div>
            <ListGroup variant="flush">
                {/* <ul className={s.contacts__list}> */}
                {filteredContacts.map(({ name, number, id }) => {
                    return (
                        <ListGroup.Item key={id}>
                            <ContactsItem
                                // key={id}
                                name={name}
                                phone={number}
                                id={id}
                            />
                        </ListGroup.Item>
                    );
                })}
            </ListGroup>
            {/* </ul> */}
        </div>
    );
};

export default ContactsList;
