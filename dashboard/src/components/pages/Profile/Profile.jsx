/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "../../../api/axios";
import useAuth from "../../../hooks/useAuth";
import showAlert from "../../ShowAlert/ShowAlert";
let initialUser = {};
let initialUserStatus = {};

const Profile = () => {
  const { auth } = useAuth();
  const [user, setUser] = useState({});
  const [userStatus, setUserStatus] = useState({});
  const [resgisterUser, setRegisterUser] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let sendUser = {};
    let sendUserStatus = {};
    try {
      if (user.email !== initialUser.email) {
        sendUser = { email: user.email };
        sendUserStatus = { email: user.email };
      }
      if (
        user.password !== initialUser.password &&
        user.password !== "" &&
        user.password !== " "
      ) {
        sendUser = { ...sendUser, password: user.password };
      }
      for (const key in userStatus) {
        if (initialUserStatus[key] !== userStatus[key]) {
          sendUserStatus = { ...sendUserStatus, [key]: userStatus[key] };
        }
      }
      let responseUser = false
      let responseUserStatus = false
      if (Object.keys(sendUser).length !== 0) {
        responseUser = await axios.put(`/users/${auth.user}`, sendUser, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${auth?.accessToken}`,
          },
        });
      }
      if (Object.keys(sendUserStatus).length !== 0) {
        if (resgisterUser === true) {
         responseUserStatus= await axios.put(`/userstatus/specificInfo`, sendUserStatus, {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${auth?.accessToken}`,
            },
          });
        }
      }
      if (!responseUser && !responseUserStatus ){
        showAlert("No se cambiaron datos", "green");
      }else{
        showAlert("Actualizado correctamente", "green");
        setTimeout(() => {
          window.location.reload(true);
        }, 2000);
        
      }

    } catch (error) {
      showAlert(
        "Error al actualizar la informacion que le corresponde, intentelo de nuevo.",
        "red"
      );
    }
  };

  const getUserInfo = async () => {
    try {
      const user = await axios.get(`/users/${auth.user}`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${auth?.accessToken}`,
        },
      });
      initialUser = { ...user.data };
      setUser(user.data);
      const userState = await axios
        .get(`/userstatus/specificInfo/${auth.user}`, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${auth?.accessToken}`,
          },
        })
        .catch(() => {
          setRegisterUser(false);
        });
      if (userState) {
        setRegisterUser(true);
        initialUserStatus = { ...userState.data };
        setUserStatus(userState.data);
      }
    } catch (error) {
      showAlert(error.message, "red");
    }
  };

  const handleRegisterChange = (event) => {
    const key = event.target.id;
    const value = event.target.value;
    setUserStatus({ ...userStatus, [key]: value });
  };

  const handleProfileChange = (event) => {
    const key = event.target.id;
    const value = event.target.value;
    setUser({ ...user, [key]: value });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="body">
      <form
        onSubmit={handleSubmit}
        className="container rounded bg-white mt-5 mb-5"
      >
        <section className="row pb-3">
          {/* perfil */}
          <article className="row g-3 col-12 col-md-12 col-lg-4">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                alt="perfil"
              />
              <span className="font-weight-bold">
                {user.name ? user.name : "Nombre"}
              </span>
              <span className="text-black-50">
                {user.rol ? user.rol : "Rol"}
              </span>
            </div>
          </article>
          {/* Editar perfil */}
          {user ? (
            <article className="row g-3 col-12 col-md-12 col-lg-4">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Editar Perfil</h4>
                </div>
                <div className="row-mt3">
                  <div className="col-md-12">
                    <label className="labels">Email</label>
                    <input
                      type="text"
                      id="email"
                      className="form-control"
                      placeholder="Ingresa email a cambiar"
                      onChange={handleProfileChange}
                      value={user.email ? user.email : "email"}
                    />
                    <div className="invalid-feedback">
                      Por favor, ingrese su email
                    </div>
                  </div>

                  <div className="col-md-12">
                    <label className="labels">Contraseña</label>
                    <input
                      type="text"
                      id="password"
                      className="form-control"
                      placeholder="Dejar en blanco si NO desea cambiar su contraseña"
                      onChange={handleProfileChange}
                    />
                    <div className="invalid-feedback">
                      Por favor, ingrese su codigo postal
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ) : null}
          {/* Editar info de registro */}
          {resgisterUser ? (
            <article className="row g-3 col-12 col-md-12 col-lg-4">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Editar Informacion de Registro</h4>
                </div>

                <div className="col-md-12">
                  <label className="labels">Telefono</label>
                  <input
                    type="text"
                    id="phone"
                    className="form-control"
                    placeholder="Ingresa numero movil"
                    onChange={handleRegisterChange}
                    value={userStatus.phone ? userStatus.phone : "Telefono"}
                  />
                  <div className="invalid-feedback">
                    Por favor, ingrese su numero movil
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <label className="labels">Localidad</label>
                    <input
                      type="text"
                      id="location"
                      className="form-control"
                      placeholder="Argentina"
                      onChange={handleRegisterChange}
                      value={
                        userStatus.location ? userStatus.location : "localidad"
                      }
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Provincia</label>
                    <select
                      id="province"
                      className="form-control"
                      value={
                        userStatus.province ? userStatus.province : "Provincia"
                      }
                      onChange={handleRegisterChange}
                    >
                      <option disabled>Selecciona la Provincia</option>
                      <option value="Buenos Aires">Buenos Aires</option>
                      <option value="Catamarca">Catamarca</option>
                      <option value="Chaco">Chaco</option>
                      <option value="Chubut">Chubut</option>
                      <option value="Córdoba">Córdoba</option>
                      <option value="Corrientes">Corrientes</option>
                      <option value="Entre Ríos">Entre Ríos</option>
                      <option value="Formosa">Formosa</option>
                      <option value="Jujuy">Jujuy</option>
                      <option value="La Pampa">La Pampa</option>
                      <option value="La Rioja">La Rioja</option>
                      <option value="Mendoza">Mendoza</option>
                      <option value="Misiones">Misiones</option>
                      <option value="Neuquén">Neuquén</option>
                      <option value="Río Negro">Río Negro</option>
                      <option value="Salta">Salta</option>
                      <option value="San Juan">San Juan</option>
                      <option value="San Luis">San Luis</option>
                      <option value="Santa Cruz">Santa Cruz</option>
                      <option value="Santa Fe">Santa Fe</option>
                      <option value="Santiago del Estero">
                        Santiago del Estero
                      </option>
                      <option value="Tierra del Fuego">Tierra del Fuego</option>
                      <option value="Tucumán">Tucumán</option>
                    </select>
                    <div className="invalid-feedback">
                      Por favor, seleccione su provincia
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <label className="labels">Direccion</label>
                  <input
                    type="text"
                    id="address"
                    className="form-control"
                    placeholder="Ingresa direccion"
                    onChange={handleRegisterChange}
                    value={
                      userStatus.address ? userStatus.address : "Direccion"
                    }
                  />
                  <div className="invalid-feedback">
                    Por favor, ingrese su direccion
                  </div>
                </div>
              </div>
            </article>
          ) : null}
        </section>
        <div className="col-5 offset-5 col-md-5 offset-md-5">
          <button className="btn btn-primary profile-button">
            Guardar datos
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
