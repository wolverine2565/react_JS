import React, { useContext } from 'react';
import { UserContext } from './contexts';

const Header = () => {
    const { username } = useContext(UserContext);

    return <header>Привет, {username}!</header>;
};

export default Header;
