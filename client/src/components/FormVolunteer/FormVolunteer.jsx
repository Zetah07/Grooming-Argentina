import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Logo from '../../assets/Grooming_Logo.png';
import s from './FormVolunteer.module.css'


const FormVolunteer = () => {

    const { register, formState: { errors }, handleSubmit } = useForm({
        "name": "nombres",
        "lastName": "apellidos",
        "birthDate": "1995-12-17T03:24:00",
        "genre": "genero",
        "nationality": "Nacionalidad",
        "province": "Provincia",
        "location": "Medellin",
        "address": "direccion de muestra",
        "document": 11111,
        "phone": 11111,
        "schooling": "Nivel de estudios",
        "profession": "Profesion",
        "email": "correoUsuario@muestra.com",
        "howKnowGrooming": "Como conocio grooming",
        "facebook": "link de facebook",
        "twitter": "link de twitter",
        "instagram": "link de instagram",
        "linkedIn": "link de linkedin",
        "howManyHours": 40
    });

    console.log(errors)

    const onSubmit = (data) => {
        // e.preventDefault()
        console.log(data)
    };

    const personalDataValidate = {
        required: {
            value: true,
            message: 'El campo no puede estar vacío'
        },
        minLength: {
            value: 3,
            message: 'El campo debe tener al menos 3 caracteres'
        },
        maxLength: {
            value: 150,
            message: 'El campo debe tener menos de 150 caracteres'
        },
        pattern: {
            value: /^[A-Za-z\s]+$/,
            message: 'Solo se permiten letras y espacios'
        }
    };



    return (
        <div>
            <Container className='px-5'>
                <div className={s.head_volunt}>
                    <h1>SUMATE!!!</h1>
                    <img src={Logo} alt="Logo" className={s.logo_volunt} />
                </div>
                <div>
                    <div className={s.p1_volunt}>
                        <h2>ASPIRANTES AL VOLUNTARIADO</h2>
                        <p>Programa de Voluntariado de Grooming Argentina.</p>
                        <p>El Programa se divide por provincias y tiene como finalidad llevar a cabo acciones tendientes a sensibilizar a la sociedad, desde un eje central de prevención en pos de erradicar el delito de Grooming en el país y en Latinoamerica.</p>
                        <p>Nuestro lema es la promoción y protección de los derechos de niños, niñas y adolescentes en internet, construyendo todos los días un ecosistema digital seguro.</p>
                        <p>A tales fines, los/as voluntarios/as tienen las siguientes responsabilidades:</p>
                        <ol>
                            <li>Presencia en las redes sociales, compartiendo las publicaciones oficiales de las cuatro redes sociales que Grooming Argentina posee oficialmente.</li>
                            <li>Activa participación con su equipo de referencia (WhatsApp, reuniones semanales y/o mensuales, ya sea presenciales y/o virtuales).</li>
                            <li>Compromiso con las actividades de la ONG (promoción de jornadas en Instituciones, incorporación de nuevos voluntarios y voluntarias, difusión en redes, presentación de propuestas, presencia en medios de comunicación, etc).</li>
                            <li>Atender las propuestas de capacitación (a través de material didáctico, reuniones, notas e informes de la ONG). </li>
                        </ol>
                        <p>Te pedimos completes el formulario con tus datos y a la brevedad nos pondremos en contacto para pasarte más detalles. </p>
                        <p>Saludos!!!</p>
                        <p>El equipo de Grooming Argentina. </p>
                        <br />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
                        <div className="d-flex flex-column align-items-start ">
                            <label className={s.label_volunt}>Dirección de correo electrónico (debe ser de GMAIL)
                                <spam>*</spam></label>
                            <input type="email" className="form-control lg-8" placeholder="name@gmail.com" {...register('email', {
                                ...personalDataValidate, pattern: {
                                    value: /[^@ \t\r\n]+@gmail\.com/,
                                    message: 'El formato de correo electrónico no es válido'
                                }
                            })} />
                            {errors.email && <button type="button" class="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                {errors.email.message}
                            </button>}
                        </div>
                        <div className="d-flex flex-column align-items-start ">
                            <label className={s.label_volunt}>Nombres<spam>*</spam></label>
                            <input type="text" className="form-control lg-8" placeholder="Nombre/s" {...register('name', personalDataValidate)} />
                            {errors.name && <button type="button" class="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                {errors.name.message}
                            </button>}
                        </div>
                        <div className="d-flex flex-column align-items-start ">
                            <label className={s.label_volunt}>Apellidos<spam>*</spam></label>
                            <input type="text" className="form-control lg-8" placeholder="Apellido/s" {...register('lastName', personalDataValidate)} />
                            {errors.lastName && <button type="button" class="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                {errors.lastName.message}
                            </button>}
                        </div>
                        <div className="d-flex flex-column align-items-start ">
                            <label className={s.label_volunt}>Número de Documento<spam>*</spam></label>
                            <input type="text" className="form-control lg-8"  {...register('document', {
                                ...personalDataValidate, pattern: {
                                    value: /^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$/,
                                    message: 'El formato de número de documento no es válido'
                                }
                            })} />
                            {errors.document && <button type="button" class="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                {errors.document.message}
                            </button>}
                        </div>
                        <div className="d-flex flex-column align-items-start ">
                            <label className={s.label_volunt}>Nacionalidad<spam>*</spam></label>
                            <input type="text" className="form-control lg-8" placeholder="Argentina" {...register('nationality', personalDataValidate)} />
                            {errors.nationality && <button type="button" class="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                {errors.nationality.message}
                            </button>}
                        </div>
                        <div className="d-flex flex-column align-items-start ">
                            <label className={s.label_volunt}>Fecha de Nacimiento<spam>*</spam></label>
                            <input type="date" className="form-control lg-8" placeholder="dd/mm/aaa" {...register('birthDate')} />
                        </div>
                        <div className="d-flex flex-column align-items-start py-3">
                            <label className={s.label_volunt}>Género<spam>*</spam></label>
                            <div className='form-check' {...register('genre')}>
                                <input type="checkbox" value='Masculino' className="form-control form-check-input lg-8" />
                                <label className='form-check-label ms-2'>Masculino</label><br />
                                <input type="checkbox" value='Femenino' className="form-control form-check-input lg-8" />
                                <label className='form-check-label ms-2'>Femenino</label><br />
                                <input type="checkbox" value='Otro' className="form-control form-check-input lg-8" />
                                <label className='form-check-label ms-2 text-start'>Otro</label>
                            </div>
                        </div>
                        <div className="d-flex flex-column align-items-start ">
                            <label className={s.label_volunt}>Localidad<spam>*</spam></label>
                            <input type="text" className="form-control lg-8"  {...register('location', personalDataValidate)} />
                            {errors.location && <button type="button" class="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                {errors.location.message}
                            </button>}
                        </div>
                        <div className="d-flex flex-column align-items-start ">
                            <label className={s.label_volunt}>Dirección<spam>*</spam></label>
                            <input type="text" className="form-control lg-8"  {...register('address', personalDataValidate)} />
                            {errors.address && <button type="button" class="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                {errors.address.message}
                            </button>}
                        </div>


                        <input type="submit" value="Enviar" className='button' />
                    </form>
                </div>
            </Container>

        </div>
    );
};

export default FormVolunteer;