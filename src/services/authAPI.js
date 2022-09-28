import axios from 'axios';

// const instance = axios.create({
//     baseURL: 'https://connections-api.herokuapp.com/',
//     params: {},
// });

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const registerUser = async profile => {
    const { data } = await axios.post('/users/signup', profile);
    token.set(data.token);
    return data;
};

const loginUser = async loginData => {
    const { data } = await axios.post('/users/login', loginData);
    token.set(data.token);
    return data;
};

const logoutUser = async id => {
    await axios.delete(`/users/logout`);
    token.unset();
};

export const authAPI = {
    registerUser,
    loginUser,
    logoutUser,
};
