import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io5';
import * as FiIcons from 'react-icons/fi';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
    {
        title: 'Perfil',
        path: '/profile',
        icon: <FiIcons.FiUsers />,
        cName: 'nav-text'
    },
    {
        title: 'Usuarios',
        path: '/profile-users',
        icon: <FiIcons.FiUsers />,
        cName: 'nav-text'
    },
    {
        title: 'Pais',
        path: '/profile-country',
        icon: <GiIcons.GiWorld />,
        cName: 'nav-text'
    },
    {
        title: 'Departamentos',
        path: '/profile-departamento',
        icon: <GiIcons.GiMountainCave />,
        cName: 'nav-text'
    },
    {
        title: 'Municipios',
        path: '/profile-municipality',
        icon: <GiIcons.GiModernCity />,
        cName: 'nav-text'
    },
    {
        title: 'Area No Educativo',
        path: '/profile-area-no-educative',
        icon: <IoIcons.IoSchoolOutline />,
        cName: 'nav-text'
    },
    {
        title: 'Ente no Educativo',
        path: '/profile-entity-no-educative',
        icon: <AiIcons.AiOutlineBank />,
        cName: 'nav-text',
    }
];