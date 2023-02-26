import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as HiIcons from "react-icons/hi"
import * as BiIcons from "react-icons/bi"


export const SidebarData = [
  {
    title: 'Bienvenidos',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Estatus de Voluntarios',
    path: '/reports',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Panel Noticias',
    path: '/products',
    icon: <HiIcons.HiOutlineNewspaper />,
    cName: 'nav-text'
  },
  {
    title: 'Panel Blogs',
    path: '/team',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Suscriptores NewsLetter',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/support',
    icon: <BiIcons.BiNotification />,
    cName: 'nav-text'
  }
];
