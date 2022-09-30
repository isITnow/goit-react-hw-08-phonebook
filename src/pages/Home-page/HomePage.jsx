import s from './homePage.module.css';

import { useSelector } from 'react-redux';
import {
    selectIsLoggedIn,
    selectUserName,
    selectToken,
} from 'redux/auth/selector-auth';
import { TbNotebook } from 'react-icons/tb';
import { ThreeDots } from 'react-loader-spinner';

const HomePage = () => {
    const userName = useSelector(selectUserName);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const tokenStatus = useSelector(selectToken);

    return (
        <div className={s.home__page}>
            {tokenStatus ? (
                isLoggedIn ? (
                    <div className={s.box}>
                        <h2 className={s.title}>{`Welcome, ${userName}!`}</h2>
                        <p className={s.text}>
                            <TbNotebook size={23} />
                            open <b>Contacts</b> tab to see your personal list
                            of names and phone numbers of people and businesses
                        </p>
                    </div>
                ) : (
                    <ThreeDots
                        height="80"
                        width="80"
                        radius="9"
                        color="#5252f8"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        visible={true}
                    />
                )
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
