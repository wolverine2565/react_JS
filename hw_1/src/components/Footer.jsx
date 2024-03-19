import React, { useContext } from 'react';
import { ThemeContext } from './contexts';

const Footer = () => {
    const { theme } = useContext(ThemeContext);
    const currentYear = new Date().getFullYear();

    return <footer className={theme}>© {currentYear} Мой сайт</footer>;
};

export default Footer;
