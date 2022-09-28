import axios from 'axios';

// const instance = axios.create({
//     baseURL: 'https://connections-api.herokuapp.com/',
//     params: {},
// });

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const registerUser = async profile => {
    return await axios.post('/users/signup', profile);
};

const loginUser = async loginData => {
    const response = await axios.post('/users/login', loginData);
    return response.data;
};

// const deleteContact = async id => await instance.delete(`/${id}`);

export const authAPI = {
    registerUser,
    loginUser,
};
