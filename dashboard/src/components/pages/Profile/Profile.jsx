/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "../../../api/axios";
import useAuth from "../../../hooks/useAuth";
import showAlert from "../../ShowAlert/ShowAlert";

const Profile = () => {
  const { auth } = useAuth();
  const [form, setForm] = useState("");
  const [validated, setValidated] = useState(false);
  const [user, setUser] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    try {
      await axios.post("http://localhost:4000/panel/profile", form, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${auth?.accessToken}`,
        }
      });

      showAlert("Actualizacion de perfil correctamente.", "green");
      form.reset();
      setForm({
        title: "",
        img: "",
        description: "",
        link: "",
        category: "",
        provinceOrLocation: "",
      });
      setValidated(false);
    } catch (error) {
      console.log(error);
      showAlert("Error al actualizar la informacion que le corresponde, intentelo de nuevo.", "red");
    }
  };

  const handleClick = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div class="body">
      <form
        onSubmit={handleSubmit}
        validate={validated}
        class="container rounded bg-white mt-5 mb-5"
      >
        <section class="row pb-3">
          <article class="row g-3 col-12 col-md-12 col-lg-4">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                class="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                alt="perfil"
              />
              <span class="font-weight-bold">nombre</span>
              <span class="text-black-50">email</span>
            </div>
          </article>
          <article class="row g-3 col-12 col-md-12 col-lg-4">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Profile Settings</h4>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <label class="labels">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    class="form-control"
                    placeholder={user.name}
                    value="name"
                    disabled
                  />
                  <div class="invalid-feedback">
                    Por favor, ingrese su nombre
                  </div>
                </div>
                <div class="col-md-6">
                  <label class="labels">Apellido</label>
                  <input
                    id="lastname"
                    type="text"
                    class="form-control"
                    value="lastname"
                    placeholder={user.lastname}
                    disabled
                  />
                  <div class="invalid-feedback">
                    Por favor, ingrese su apellido
                  </div>
                </div>
              </div>
              <div class="row-mt3">
                <div class="col-md-12">
                  <label class="labels">Numero Movil</label>
                  <input
                    type="number"
                    id="phone"
                    class="form-control"
                    placeholder="Ingresa numero movil"
                    value="phone"
                  />
                  <div class="invalid-feedback">
                    Por favor, ingrese su numero movil
                  </div>
                </div>
                <div class="col-md-12">
                  <label class="labels">Direccion</label>
                  <input
                    type="text"
                    id="address"
                    class="form-control"
                    placeholder="Ingresa direccion"
                    value=""
                  />
                  <div class="invalid-feedback">
                    Por favor, ingrese su direccion
                  </div>
                </div>
                <div class="col-md-12">
                  <label class="labels">Codigo Postal</label>
                  <input
                    type="number"
                    id="zip"
                    class="form-control"
                    placeholder="Ingresa codigo postal"
                    value="zip"
                  />
                  <div class="invalid-feedback">
                    Por favor, ingrese su codigo postal
                  </div>
                </div>
                <div class="col-md-12">
                  <label class="labels">Email</label>
                  <input
                    type="text"
                    id="email"
                    class="form-control"
                    placeholder="Ingresa email"
                    value="email"
                  />
                  <div class="invalid-feedback">
                    Por favor, ingrese su email
                  </div>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <label class="labels">Pais</label>
                  <input
                    type="text"
                    id="country"
                    class="form-control"
                    placeholder="Argentina"
                    value="Argentina"
                    disabled
                  />
                </div>
                <div class="col-md-6">
                  <label class="labels">Provincia</label>
                  <select class="form-control">
                    <option value="">Selecciona la Provincia</option>
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
                    <option value="Santiago del Estero">Santiago del Estero</option>
                    <option value="Tierra del Fuego">Tierra del Fuego</option>
                    <option value="Tucumán">Tucumán</option>
                  </select>
                  <div class="invalid-feedback">
                    Por favor, seleccione su provincia
                  </div>
                </div>
              </div>
              <div class="mt-5 text-center">
              </div>
            </div>
          </article>
          <article class="row g-3 col-12 col-md-12 col-lg-4">
            <div class="p-3 py-5">

              <div class="col-md-12">
                <label class="form-label" for="customFile">Additional Details</label>
                <input
                  type="file"
                  id="customFile"
                  class="form-control"
                  placeholder="additional details"
                  value=""
                />
              </div>
            </div>
          </article>
        </section>
        <div className="col-5 offset-5 col-md-5 offset-md-5">
          <button
            onClick={handleClick}
            class="btn btn-primary profile-button"
            type="button"
          > Actualizar Perfil
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
