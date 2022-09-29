// import s from './homePage.module.css';

import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserName } from 'redux/auth/selector-auth';

const HomePage = () => {
    const userName = useSelector(selectUserName);
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <h1>
            {isLoggedIn
                ? `Welcome back, ${userName}!`
                : 'Welcome to our website. Please, login to continue.'}
        </h1>
    );
};

export default HomePage;
