import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as TfiIcons from "react-icons/tfi";
import * as MdIcons from "react-icons/md";
import SidebarData from './sidebar';
import './Homepage.css';
function NavBar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <TfiIcons.TfiMenu size={25} onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar.toggle'>
                        <Link to='#' className='menu-bars'>
                            <MdIcons.MdClose size={25} />
                        </Link>
                    </li>
                    {SidebarData().map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
