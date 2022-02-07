import React, { useState } from 'react';
// import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import {Link, NavLink} from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './navbar.css';
import { IconContext } from 'react-icons';
import {Menu} from "@headlessui/react";

export const SidebarAdmin = ({handleLogout})=> {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div >
            <IconContext.Provider value={{ color: '#000' }}>
                <div className='navbar'>
                    {/*<p className='text-black font-medium '>Menu Admin</p>*/}
                    {/*<Link to='#' className='menu-bars'>*/}
                    {/*    <FaIcons.FaBars onClick={showSidebar} />*/}
                    {/*</Link>*/}
                    <Menu as="div" className="ml-3 relative">
                        <div className='flex items-center'>
                            <p className='mr-2 text-black font-semibold text-xl'/>
                            <Menu.Button  className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span className="sr-only">Open user menu</span>
                                <img
                                    onClick={showSidebar}
                                    className="h-8 w-8 rounded-full "
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                            </Menu.Button>
                        </div>
                    </Menu>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                        <li  className='nav-text'>
                            <NavLink
                                to="/"
                                onClick={handleLogout}
                            >
                                <IoIcons.IoIosLogOut />
                                <span>Cerrar Sesion</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </IconContext.Provider>
        </div>
    );
}

