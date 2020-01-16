import React from 'react';
import stl from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={stl.nav}>
            <div className={stl.item}>
                <NavLink to="/profile" activeClassName={stl.active}>Profile</NavLink>
            </div>
            <div className={stl.item}>
                <NavLink to="/dialogs" activeClassName={stl.active}>Messages</NavLink>
            </div>
            <div className={stl.item}>
                <NavLink to="/users" activeClassName={stl.active}>Users</NavLink>
            </div>
            <div className={stl.item}>
                <NavLink to="/news" activeClassName={stl.active}>News</NavLink>
            </div>
            <div className={stl.item}>
                <NavLink to="/music" activeClassName={stl.active}>Music</NavLink>
            </div>
            <div className={stl.item}>
                <NavLink to="/settings" activeClassName={stl.active}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;

//**************************************************//
// =======   К О Н С П Е К Т   =====================//
//**************************************************//

// stl.nav (.item)...  -  модульные стили
// <NavLink to="">  -  вместо <a href="">
// activeClassName={stl.active}  -  стили для активной ссылки