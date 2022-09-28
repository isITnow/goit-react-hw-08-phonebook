import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const getContacts = async () => {
    const response = await axios.get('/contacts');
    return response.data;
};

const addContact = async contact => {
    const response = await axios.post('/contacts', contact);
    return response.data;
};

const deleteContact = async contactId =>
    await axios.delete(`/contacts/${contactId}`);

export const contactsAPI = {
    getContacts,
    addContact,
    deleteContact,
};
