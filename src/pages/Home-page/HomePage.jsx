import s from './homePage.module.css';

import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserName } from 'redux/auth/selector-auth';
import { TbNotebook } from 'react-icons/tb';

const HomePage = () => {
    const userName = useSelector(selectUserName);
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <div className={s.home__page}>
            {isLoggedIn ? (
                <h1 className={s.title}>{`Welcome back, ${userName}!`}</h1>
            ) : (
                <div>
                    <h1 className={s.title}>
                        Welcome! Please, login to continue.
                    </h1>
                    <p className={s.text}>
                        <TbNotebook />
                        this phone book was created for your convenience. it
                        stores list of names and phone numbers of people and
                        businesses
                    </p>
                </div>
            )}
        </div>
    );
};

export default HomePage;
