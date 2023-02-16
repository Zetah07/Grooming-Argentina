import React from 'react';
import s from './NavBar2.module.css'
import { NavLink } from 'react-router-dom';


const NavBar3 = () => {
    return (
        <div className={s.header}>
            <div className={s.nav}>
                <NavLink to='/' activeClassName={s.active} className={s.logo}><img src='./Grooming_Logo.png' alt="loga" /></NavLink>
                <ul className={s.nav_menu}>
                    <li className={s.nav_menu_item}>
                        <NavLink to='/' activeClassName={s.active} >Home</NavLink>
                    </li>
                    <li className={s.nav_menu_item}>
                        <NavLink to='/nosotros' activeClassName={s.active} >About</NavLink>
                    </li>
                    <li className={s.nav_menu_item}>
                        <NavLink to='/contact' activeClassName={s.active} >Contact</NavLink>
                    </li>
                    <button className={s.btn_volunter}>Become Volunter</button>
                </ul>

            </div>
        </div>
    );
};

export default NavBar3;
