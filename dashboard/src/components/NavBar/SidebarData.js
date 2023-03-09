import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as HiIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md"
import * as RiIcons from "react-icons/ri"

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


const cursos = {
  title: "Cursos",
  path: "/panel/cursos",
  icon: <BiIcons.BiBookBookmark />,
  cName: "nav-text",
};

const newUser = {
  title: "Crear nuevo usuario",
  path: "/panel/nuevousuario",
  icon: <AiIcons.AiOutlineUserAdd />,
  cName: "nav-text",
};

const delUser = {
  title: "Usuarios",
  path: "/panel/BorrarUsuario",
  icon: <AiIcons.AiOutlineUserDelete />,
  cName: "nav-text",
};

const createNew = {
  title: "Crear Noticia",
  path: "/panel/crearNoticia",
  icon: <MdIcons.MdPostAdd/>,
  cName: "nav-text",
};

const createBlog = {
  title: "Crear Blog",
  path: "/panel/crearblog",
  icon:  <MdIcons.MdPostAdd/>,
  cName: "nav-text",
}

const createCourse = {
  title: "Crear Curso",
  path: "/panel/crearcurso",
  icon: <RiIcons.RiVideoUploadLine/>,
  cName: "nav-text",
}

export const SidebarData = {
  admin: [
    bienvenidos,
    newUser,
    delUser,
    estatusVoluntarios,
    panelNoticias,
    createNew,
    panelBlogs,
    createBlog,
    suscriptores,
    cursos,
    createCourse,
  ],
  user: [bienvenidos,createBlog],
  hr: [bienvenidos, estatusVoluntarios, suscriptores,createBlog],
  volunteer: [bienvenidos, cursos,createBlog],
  editor: [bienvenidos, panelBlogs, panelNoticias, createNew,createBlog],
};
