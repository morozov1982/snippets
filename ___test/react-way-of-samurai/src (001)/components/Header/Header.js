import React from 'react';
import stl from './Header.module.css';

const Header = () => {
    return (
        <header className={stl.header}>
            <img src="https://www.freelogodesign.org/Content/img/logo-ex-7.png" alt="logo"/>
        </header>
    );
}

export default Header;