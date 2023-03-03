import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as HiIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";

const bienvenidos = {
  title: "Bienvenidos",
  path: "/panel/bienvenidos",
  icon: <AiIcons.AiFillHome />,
  cName: "nav-text",
};

const estatusVoluntarios = {
  title: "Estatus de Voluntarios",
  path: "/panel/voluntarios",
  icon: <IoIcons.IoMdPeople />,
  cName: "nav-text",
};

const panelNoticias = {
  title: "Panel Noticias",
  path: "/panel/noticias",
  icon: <HiIcons.HiOutlineNewspaper />,
  cName: "nav-text",
};

const panelBlogs = {
  title: "Panel Blogs",
  path: "/panel/blogs",
  icon: <IoIcons.IoIosPaper />,
  cName: "nav-text",
};

const suscriptores = {
  title: "Suscriptores NewsLetter",
  path: "/panel/suscriptores",
  icon: <FaIcons.FaEnvelopeOpenText />,
  cName: "nav-text",
};

const reports = {
  title: "Reportes",
  path: "/panel/reportes",
  icon: <BiIcons.BiNotification />,
  cName: "nav-text",
};

const cursos = {
  title: "Cursos",
  path: "/panel/cursos",
  icon: <BiIcons.BiBookBookmark/>,
  cName: "nav-text",
}

const newUser = {
  title: "Crear nuevo usuario",
  path: "/panel/nuevousuario",
  icon: <AiIcons.AiOutlineUserAdd />,
  cName: "nav-text",
};

export const SidebarData = {
  admin: [
    bienvenidos,
    estatusVoluntarios,
    panelNoticias,
    panelBlogs,
    suscriptores,
    reports,
    cursos,
    newUser
  ],
  user: [bienvenidos],
  hr: [bienvenidos, estatusVoluntarios, reports, suscriptores],
  volunteer: [bienvenidos,cursos],
  editor:[bienvenidos,panelBlogs, panelNoticias]
};
