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
                <div className={s.box}>
                    <h2 className={s.title}>{`Welcome, ${userName}!`}</h2>
                    <p className={s.text}>
                        <TbNotebook size={23} />
                        open <b>Contacts</b> tab to see your personal list of
                        names and phone numbers of people and businesses
                    </p>
                </div>
            ) : (
                <div className={s.box}>
                    <h2 className={s.title}>
                        Welcome! Please, login or register to continue.
                    </h2>
                    <p className={s.text}>
                        <TbNotebook size={23} />
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
