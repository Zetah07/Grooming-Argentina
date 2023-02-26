import React, {useState} from "react";

const Profile = () => {

  const [user, setUser] = useState('');

  return (
    <div>
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                alt="perfil"
              />
              <span className="font-weight-bold">pato</span>
              <span className="text-black-50">email</span>
            </div>
          </div>
          <div className="col-md5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <div className="row-mt2">
                <div className="col-md-6"></div>
                <label className="labels">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                ></input>
                <div className="col-md-6"></div>
                <label className="labels">Apellido</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Apellido"
                ></input>
              </div>
              <div className="row-mt3">
                <div className="col-md-12">
                  <label className="labels">Numero Movil</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ingresa numero movil"
                    value=""
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Direccion</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ingresa direccion"
                    value=""
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Codigo Postal</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ingresa codigo postal"
                    value=""
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ingresa email"
                    value=""
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label className="labels">Pais</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Argentina"
                    value=""
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Provincia</label>
                  <input
                    type="text"
                    className="form-control"
                    value=""
                    placeholder="Ingresa Provincia"
                  />
                </div>
              </div>
              <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Actualizar Perfil</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
