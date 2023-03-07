import React, { useEffect } from "react";
import useAuth from "../../../hooks/useAuth.js";
import { useState } from "react";
import axios from "../../../api/axios";
import logo from "../../../assets/Grooming_Logo.png";

const Bienvenidos = () => {
  const { auth } = useAuth();
  const [name, setName] = useState("Usuario");

  const getUserName = async () => {
    try {
      const user = await axios.get(`/users/${auth.user}`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${auth?.accessToken}`,
        },
      });
      setName(user.data.name);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserName();
  }, []);

  return (
    <div className="container" style={{display:"flex", justifyContent:"center",height:"90vh",alignItems:"center",flexDirection:"column"}}>
        <img src={logo} alt="Logo grooming Argentina" style={{width:"20rem"}}/>
        <h1 style={{fontFamily:"Titulo Gotham", fontSize:"3rem",color:"#004b82"}}>Bienvenido:</h1>
        <h1 style={{fontFamily:"Titulo Gotham", fontSize:"3rem",color:"#004b82"}}>{name}</h1>
    </div>
  );
};

export default Bienvenidos;
