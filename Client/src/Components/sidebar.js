import React from 'react';
import { MdOutlineHome, MdAccountCircle } from "react-icons/md";
import { BiSolidFoodMenu } from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs";
import { TbMail } from "react-icons/tb";

function SidebarData() {
    return [
        {
            title: 'Home',
            path: '/',
            icon: <MdOutlineHome />,
            cName: 'nav-text'
        },
        {
            title: 'Account',
            path: '/create_account',
            icon: <MdAccountCircle />,
            cName: 'nav-text'
        },
        {
            title: 'Menu',
            path: '/menu',
            icon: <BiSolidFoodMenu />,
            cName: 'nav-text'
        },
        {
            title: 'My Orders',
            path: '/cart',
            icon: <BsFillCartFill />,
            cName: 'nav-text'
        },
        {
            title: 'Contact Us',
            path: '/contact_us',
            icon: <TbMail />,
            cName: 'nav-text'
        },
    ];
}

export default SidebarData;
