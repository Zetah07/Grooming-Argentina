import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './CreateNew.module.css';
import axios from 'axios';

const CreateNew = () => {
  const dispatch = useDispatch();
  const allTemperaments = useSelector(state => state.temperaments);
  const [errors, setErrors] = useState({})
  const [modal, setModal] = useState(false);
  const [apiResponse, setApiResponse] = useState("");
  const [isApiError, setIsApiError] = useState(false);
  const [loading, setLoading] = useState(false);
  const regexURL = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/;

  const [form, setForm] = useState({
    title: "",
    img: "",
    description: "",
    link: "",
    category: "",
    provinceOrLocation: "",
  });

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value })
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const err = onValidate(form);
    if (err === null) {
      setLoading(true);
      axios.post("http://localhost:3500/news", form)
        .then(res => {
          setIsApiError(false);
          setApiResponse(res.data.message);
          setLoading(false);
          setModal(!modal);
          setErrors({});
          setForm({
            title: "",
            img: "",
            description: "",
            link: "",
            category: "",
            provinceOrLocation: "",
          });
        })
        .catch((error) => {
          setIsApiError(true);
          setApiResponse(error.response.data.error);
          setLoading(false);
          setModal(!modal);
          setErrors({});
        });
    }
    else {
      setErrors(err);
    }
  }


  const onValidate = (form) => {
    let isError = false;
    let error = {};
    if (form.title.length <= 3) {
      error.title = "El titulo no puede ser menor a 3 letras";
      isError = true;
    }
    if (!regexURL.test(form.img)) {
      error.img = "La url ingresada no es valida";
      isError = true;
    }
    if (!regexURL.test(form.link)) {
      error.image = "La url ingresada no es valida";
      isError = true;
    }
    if (form.description.length <= 20) {
      error.description = "La descripción no puede ser menor a 20 letras";
      isError = true;
    }
    if (form.category.length <= 3) {
      error.category = "La categoria no puede ser menor a 3 letras";
      isError = true;
    }
    if (form.provinceOrLocation.length <= 3) {
      error.provinceOrLocation = "La provincia no puede ser menor a 3 letras";
      isError = true;
    }
    return isError ? error : null;
  }

  return (
    <form onSubmit={submitHandler} className={style.form}>
      {(modal) && (
        <div className={style.modal}>
          <div onClick={toggleModal} className={style.overlay}></div>
          <div className={style.modalContent}>
            {!loading ? (
              <>
                {isApiError ?
                  <><img className={style.imgNotCreate} src="notCreate-icon.png" alt="not create img"></img>
                    <h2>Hubo un error con la creación de la noticia</h2></>
                  :
                  <><img className={style.imgCreate} src="create-icon.png" alt="create img"></img>
                    <h2>Se creó la noticia correctamente</h2></>}
                <p>{apiResponse}</p>
              </>
            ) : (
              <>
                <img className={style.imgNotCreate} src="loading.gif" alt="loading img"></img>
              </>
            )}
            < button className={style.closeModal} onClick={toggleModal}>X</button>
          </div>
        </div>
      )
      }
      <div className={style.title}>
        <h2> Crear Noticia </h2>
      </div>
      <label>Titulo </label>
      <input type="text" value={form.title} name="title" onChange={changeHandler} />
      <span className={style.error}>
        {errors.title && <><img className={style.img} src="error-icon.png" alt="error"></img><span className={style.span}>{errors.title}</span></>}
      </span>
      <br />
      <label>Image URL: </label>
      <input type="url" value={form.img} name="img" onChange={changeHandler} />
      <span className={style.error}>
        {errors.img && <><img className={style.img} src="error-icon.png" alt="error img"></img><span className={style.span}>{errors.img}</span></>}
      </span>
      <br />
      <label>Link: </label>
      <input type="url" value={form.link} name="link" onChange={changeHandler} />
      <span className={style.error}>
        {errors.link && <><img className={style.img} src="error-icon.png" alt="error img"></img><span className={style.span}>{errors.link}</span></>}
      </span>
      <br />
      <label>Categoria </label>
      <input type="text" value={form.category} name="category" onChange={changeHandler} />
      <span className={style.error}>
        {errors.category && <><img className={style.img} src="error-icon.png" alt="error img"></img><span className={style.span}>{errors.category}</span></>}
      </span>
      <br />
      <label>Provincia o localización: </label>
      <input type="text" value={form.provinceOrLocation} name="provinceOrLocation" onChange={changeHandler} />
      <span className={style.error}>
        {errors.provinceOrLocation && <><img className={style.img} src="error-icon.png" alt="error img"></img><span className={style.span}>{errors.provinceOrLocation}</span></>}
      </span>
      <br />
      <label>Description: </label>
      <input type="textarea" value={form.description} name="description" onChange={changeHandler} />
      <span className={style.error}>
        {errors.description && <><img className={style.img} src="error-icon.png" alt="error img"></img><span className={style.span}>{errors.description}</span></>}
      </span>
      <br />
      <button type="submit" class="btn btn-primary">Crear</button>
    </form >
  )
}

export default CreateNew;