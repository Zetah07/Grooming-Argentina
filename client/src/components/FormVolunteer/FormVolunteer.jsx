import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Logo from '../../assets/Grooming_Logo.png';
import s from './FormVolunteer.module.css'


const FormVolunteer = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div>
            <Container>
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
                    </div>
                </div>
                {/* <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" name="name" ref={register({ required: true })} />
                        {errors.name && <p className="text-danger">{errors.name.message}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" name="email" ref={register({ required: true })} />
                        {errors.email && <p className="text-danger">{errors.email.message}</p>}
                    </div>
                </form> */}
            </Container>
        </div>
    );
};

export default FormVolunteer;