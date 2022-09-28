import axios from 'axios';

// const instance = axios.create({
//     baseURL: 'https://connections-api.herokuapp.com/',
//     params: {},
// });

const headerToken = {
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
    headerToken.set(data.token);
    return data;
};

const loginUser = async loginData => {
    const { data } = await axios.post('/users/login', loginData);
    headerToken.set(data.token);
    return data;
};

const logoutUser = async id => {
    await axios.delete(`/users/logout`);
    headerToken.unset();
};

const getCurrentUser = async () => {
    const { data } = await axios.get('/users/current');
    return data;
};

export const authAPI = {
    registerUser,
    loginUser,
    logoutUser,
    getCurrentUser,
    headerToken,
};
