// import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthNav from 'components/AuthNav';

import s from './appBar.module.css';
import UserMenu from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selector-auth';
// import Nav from 'react-bootstrap/Nav';

const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <header className={s.header}>
            <NavLink to="/">Homepage</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
};

export default AppBar;
// AppBar.propTypes = {};

// function JustifiedExample() {
//   return (
//       <Nav justify variant="tabs" defaultActiveKey="/home">
//           <Nav.Item>
//               <Nav.Link href="/home">
//                   <NavLink to="/">Homepage</NavLink>
//               </Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//               <Nav.Link eventKey="link-1">
//                   <NavLink to="/contacts">Contacts</NavLink>
//               </Nav.Link>
//           </Nav.Item>
//       </Nav>
//   );
// }
