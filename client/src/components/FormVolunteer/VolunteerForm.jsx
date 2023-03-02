import React from 'react';
import { Container, Form, Button, FormGroup } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import s from './FormVolunteer.module.css'
import { object, string, date, mixed, number } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormCheckLabel from 'react-bootstrap/esm/FormCheckLabel';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import Logo from '../../assets/Grooming_Logo.png';
import axios from 'axios';


// import * as yup from 'yup';




const VolunteerForm = () => {


    const defaultValues = {
        name: "",
        lastName: "",
        birthDate: "",
        genre: "",
        nationality: "",
        province: "",
        location: "",
        address: "",
        document: "",
        phone: "",
        schooling: "",
        profession: "",
        email: "",
        howKnowGrooming: "",
        facebook: "",
        twitter: "",
        instagram: "",
        linkedIn: "",
        howManyHours: 0,
        opinion: "",
        knowGroominPerson: "",
        whoGroominPerson: "",
        whyGroomin: "",
        theme: "",
        expectations: "",
        adjDocument: "",
        CV: ""
    }

    const regExpFacebook = /(?:https?:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w-]*\/)*?(\/)?([^/?]*)/;

    const schema = object().shape({
        email: string().email('Ingrese un formato de correo Gmail').required('El campo no puede estar vacío')
            .matches(/[^@ \t\r\n]+@gmail\.com/, "El correo debe ser de tipo email"),
        name: string().required('El campo no puede estar vacío').min(3, "Debe tener al menos 3 caracteres")
            .max(30, "Debe tener menos de 30 caracteres").matches(/^[A-Za-z\s]+$/, 'El campo solo puede contener letras y espacios'),
        lastName: string().required('El campo no puede estar vacío').min(3, "Debe tener al menos 3 caracteres")
            .max(50, "Debe tener menos de 30 caracteres").matches(/^[A-Za-z\s]+$/, 'El campo solo puede contener letras y espacios'),
        document: string().required('El campo no puede estar vacío').min(3, "Debe tener al menos 3 caracteres")
            .max(8, "Debe tener hasta  8 caracteres").matches(/^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$/, 'El formato de número de documento no es válido'),
        nationality: string().required('El campo no puede estar vacío').min(3, "Debe tener al menos 3 caracteres")
            .max(50, "Debe tener menos de 20 caracteres").matches(/^[A-Za-z\s]+$/, 'El campo solo puede contener letras y espacios'),
        birthDate: date().required('El campo no puede estar vacío'),
        province: string().required('El campo no puede estar vacío').min(3, "Debe tener al menos 3 caracteres")
            .max(50, "Debe tener menos de 30 caracteres").matches(/^[A-Za-z\s]+$/, 'El campo solo puede contener letras y espacios'),
        location: string().required('El campo no puede estar vacío').min(3, "Debe tener al menos 3 caracteres")
            .max(255, "Debe tener menos de 255 caracteres"),
        address: string().required('El campo no puede estar vacío').min(3, "Debe tener al menos 3 caracteres")
            .max(255, "Debe tener menos de 255 caracteres"),
        genre: mixed().oneOf(['masculino', 'femenino', 'otro']).defined(),
        phone: string().required('El campo no puede estar vacío').min(5, "Debe tener al menos 5 caracteres")
            .max(20, "Debe tener menos de 20 caracteres"),
        schooling: mixed().oneOf(['secundario', 'tecnico', 'universitario']).defined(),
        profession: string().required('El campo no puede estar vacío').min(3, "Debe tener al menos 3 caracteres")
            .max(50, "Debe tener menos de 30 caracteres").matches(/^[A-Za-z\s]+$/, 'El campo solo puede contener letras y espacios'),
        howKnowGrooming: mixed().oneOf(['facebook', 'instagram', 'twitter', 'radio', 'televisión', 'charla', 'conocido', 'otros']).defined(),
        howManyHours: number().required('El campo no puede estar vacío').moreThan(1, 'Debe disponer al menos 1 hora').lessThan(40, 'Debe disponer 40 horas como máximo')
            .positive('El número de horas no puede ser negativo o cero').integer('El número de horas debe ser un número entero'),
        facebook: string().required('El campo no puede estar vacío').url('Ingrese una URL válida')
            .matches(regExpFacebook, 'La url debe pertenecer al formato https://www.facebook.com/pages/'),
        twitter: string().required('El campo no puede estar vacío').url('Ingrese una URL válida')
            .matches(/(?:https?:\/\/)?(?:www\.)?twitter\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w-]*\/)*?(\/)?([^/?]*)/, 'La url debe pertenecer al formato https://www.twitter.com/pages/'),
        instagram: string().required('El campo no puede estar vacío').url('Ingrese una URL válida')
            .matches(/(?:https?:\/\/)?(?:www\.)?instagram\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w-]*\/)*?(\/)?([^/?]*)/, 'La url debe pertenecer al formato https://www.instagram.com/pages/'),
        linkedIn: string().required('El campo no puede estar vacío').url('Ingrese una URL válida')
            .matches(/(?:https?:\/\/)?(?:www\.)?linkedIn\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w-]*\/)*?(\/)?([^/?]*)/, 'La url debe pertenecer al formato https://www.linkedIn.com/pages/'),
        opinion: string().min(3, "Debe tener al menos 3 caracteres").max(255, "Debe tener hasta 255 caracteres"),
        knowGroominPerson: string().required('El campo no puede estar vacío'),
        whoGroominPerson: string().required('El campo no puede estar vacío').min(3, "Debe tener al menos 3 caracteres")
            .max(50, "Debe tener menos de 50 caracteres"),
        whyGroomin: string().required('El campo no puede estar vacío').min(3, "Debe tener al menos 3 caracteres")
            .max(255, "Debe tener menos de 255 caracteres"),
        theme: string().required('El campo no puede estar vacío').min(3, "Debe tener al menos 3 caracteres")
            .max(255, "Debe tener menos de 255 caracteres"),
        expectations: string().min(3, "Debe tener al menos 3 caracteres")
            .max(255, "Debe tener menos de 255 caracteres"),
        adjDocument: mixed().required('Debe adjuntar la imgen de su DNI en formato pdf.')
            .test('fileType', 'Solo se permiten archivos PDF', (value) => {
                return value && value[0].type === 'application/pdf';
            })
            .test('fileSize', 'El tamaño del archivo no debe exceder 1 MB', (value) => {
                return value && value[0].size <= 1048576; // es  1MB
            }),
        CV: mixed().required('Debe adjuntar la imgen de su CV en formato pdf.')
            .test('fileType', 'Solo se permiten archivos PDF', (value) => {
                return value && value[0].type === 'application/pdf';
            })
            .test('fileSize', 'El tamaño del archivo no debe exceder 1 MB', (value) => {
                return value && value[0].size <= 1048576; // es  1MB
            }),
    });



    const { register, formState: { errors, touchedFields }, handleSubmit } = useForm(

        {
            mode: 'onTouched',
            reValidateMode: 'onChange',
            resolver: yupResolver(schema),
            defaultValues: defaultValues,
            validationSchema: schema

        })

    // console.log(errors.adjDocument)
    // console.log(errors.email)
    // console.log(errors)


    //const { REACT_APP_REST_API } = process.env;

    const sendFormData = async (data) => {
        console.log(data.CV)
        const formData = new FormData();
        // formData.append('email', data.email);
        // formData.append('lastName', data.lastName);
        // formData.append('birthDate', data.birthDate);
        // formData.append('genre', data.genre);
        // formData.append('nationality', data.nationality);
        // formData.append('province', data.province);
        // formData.append('location', data.location);
        // formData.append('address', data.address);
        // formData.append('document', data.document);
        // formData.append('schooling', data.schooling);
        // formData.append('profession', data.profession);
        // formData.append('howKnowGrooming', data.howKnowGrooming);
        // formData.append('facebook', data.facebook);
        // formData.append('twitter', data.twitter);
        // formData.append('instagram', data.instagram);
        // formData.append('linkedIn', data.linkedIn);
        // formData.append('howManyHours', data.howManyHours);
        // formData.append('opinion', data.opinion);
        // formData.append('knowGroominPerson', data.knowGroominPerson);
        // formData.append('whoGroominPerson', data.whoGroominPerson);
        // formData.append('whyGroomin', data.whyGroomin);
        // formData.append('theme', data.theme);
        // formData.append('expectations', data.expectations);
        formData.append('adjDocument', data.adjDocument[0]);
        formData.append('CV', data.CV[0]);
        formData.append("userRegister", JSON.stringify(data));

        console.log([...formData])


        await axios.post('http://localhost:3500/userstatus', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then((res) => {
            console.log(res)
        })
            .catch((err) => {
                //console.log(err)
            });
        // reset(defaultValues);
    };





    return (
        <Container >
            <div className={s.head_volunt}>
                <h1>SUMATE!!!</h1>
                <img src={Logo} alt="Logo" className={s.logo_volunt} />
            </div>
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
            <Form noValidate className='px-5' onSubmit={handleSubmit(sendFormData)}>
                <Form.Group className='d-flex flex-column align-items-start pb-3 col-lg-8'>
                    <Form.Label className={s.label_volunt}>Dirección de correo electrónico (debe ser de GMAIL)</Form.Label>
                    <Form.Control type="email" name='email' placeholder="name@gmail.com" isInvalid={!!errors.email} isValid={touchedFields.email && !errors.email}
                        {...register('email')} />
                    <Form.Control.Feedback>Correcto!!!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">{errors?.email?.message}</Form.Control.Feedback>
                </Form.Group>
                {/* 2-nombres ---> name */}
                <Form.Group className='d-flex flex-column align-items-start pb-3 col-lg-8'>
                    <Form.Label className={s.label_volunt}>Nombres</Form.Label>
                    <Form.Control type="text" placeholder="Nombre's" isInvalid={!!errors.name} isValid={touchedFields.name && !errors.name}
                        {...register('name')} />
                    <Form.Control.Feedback>Correcto!!!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">{errors?.name?.message}</Form.Control.Feedback>
                </Form.Group>
                {/* Apellidos ---> lastName */}
                <Form.Group className='d-flex flex-column align-items-start pb-3 col-lg-8'>
                    <Form.Label className={s.label_volunt}>Apellido's</Form.Label>
                    <Form.Control type="text" placeholder="Apellido's" isInvalid={!!errors.lastName} isValid={touchedFields.lastName && !errors.lastName}
                        {...register('lastName')} />
                    <Form.Control.Feedback>Correcto!!!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">{errors?.lastName?.message}</Form.Control.Feedback>
                </Form.Group>
                {/* Número de Documento ---> document */}
                <Form.Group className='d-flex flex-column align-items-start pb-3 col-lg-8'>
                    <Form.Label className={s.label_volunt}>Número de Documento</Form.Label>
                    <Form.Control type="text" placeholder="Número de Documento" isInvalid={!!errors.document} isValid={touchedFields.document && !errors.document}
                        {...register('document')} />
                    <Form.Control.Feedback>Correcto!!!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">{errors?.document?.message}</Form.Control.Feedback>
                </Form.Group>
                {/* Número de Nacionalidad ---> nationality */}
                <Form.Group className='d-flex flex-column align-items-start pb-3 col-lg-8'>
                    <Form.Label className={s.label_volunt}>Nacionalidad</Form.Label>
                    <Form.Control type="text" placeholder="Argentina" isInvalid={!!errors.nationality} isValid={touchedFields.nationality && !errors.nationality}
                        {...register('nationality')} />
                    <Form.Control.Feedback>Correcto!!!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">{errors?.nationality?.message}</Form.Control.Feedback>
                </Form.Group>
                {/* Fecha de Nacimiento ---> birthDate */}
                <Form.Group className='d-flex flex-column align-items-start pb-3 col-lg-8'>
                    <Form.Label className={s.label_volunt}>Fecha de Nacimiento</Form.Label>
                    <Form.Control type="date" placeholder="Fecha" isInvalid={!!errors.birthDate} isValid={touchedFields.birthDate && !errors.birthDate}
                        {...register('birthDate')} />
                    <Form.Control.Feedback>Correcto!!!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">{errors?.birthDate?.message}</Form.Control.Feedback>
                </Form.Group>
                {/* Provincia ---> province */}
                <Form.Group className='d-flex flex-column align-items-start pb-3 col-lg-8'>
                    <Form.Label className={s.label_volunt}>Provincia</Form.Label>
                    <Form.Control type="text" placeholder="Buenos Aires" isInvalid={!!errors.province} isValid={touchedFields.province && !errors.province}
                        {...register('province')} />
                    <Form.Control.Feedback>Correcto!!!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">{errors?.province?.message}</Form.Control.Feedback>
                </Form.Group>
                {/* Localidad ---> location */}
                <Form.Group className='d-flex flex-column align-items-start pb-3 col-lg-8'>
                    <Form.Label className={s.label_volunt}>Localidad</Form.Label>
                    <Form.Control type="text" placeholder="Alto Los Cardales" isInvalid={!!errors.location} isValid={touchedFields.location && !errors.location}
                        {...register('location')} />
                    <Form.Control.Feedback>Correcto!!!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">{errors?.location?.message}</Form.Control.Feedback>
                </Form.Group>
                {/* Dirección ---> address */}
                <Form.Group className='d-flex flex-column align-items-start pb-3 col-lg-8'>
                    <Form.Label className={s.label_volunt}>Dirección</Form.Label>
                    <Form.Control type="text" placeholder="Dirección" isInvalid={!!errors.address} isValid={touchedFields.address && !errors.address}
                        {...register('address')} />
                    <Form.Control.Feedback>Correcto!!!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">{errors?.address?.message}</Form.Control.Feedback>
                </Form.Group>
                {/* Género ---> genre */}
                <Form.Group className='d-flex flex-column align-items-start pb-3 col-lg-8'>
                    <Form.Label className={s.label_volunt}>Género</Form.Label>
                </Form.Group>
                <Form.Group className='d-flex flex-row align-items-start pb-2 col-lg-8'>
                    <FormCheckInput type='radio' id="m" value='masculino' {...register('genre')} />
                    <FormCheckLabel htmlFor='m' className='ms-2' >Masculino</FormCheckLabel>
                </Form.Group>
                <Form.Group className='d-flex flex-row align-items-start pb-2 col-lg-8'>
                    <FormCheckInput type='radio' id="f" value='femenino'  {...register('genre')} />
                    <FormCheckLabel className='ms-2' htmlFor="f">Femenino</FormCheckLabel>
                </Form.Group>
                <Form.Group className='d-flex flex-row align-items-start pb-2 col-lg-8'>
                    <FormCheckInput type='radio' id="o" value='otro' {...register('genre')} />
                    <FormCheckLabel className='ms-2' htmlFor="o">Otro</FormCheckLabel>
                </Form.Group>
                {/* Teléfono celular ---> phone */}
                <Form.Group className='d-flex flex-column align-items-start pb-3 col-lg-8'>
                    <Form.Label className={s.label_volunt}>Teléfono celular</Form.Label>
                    <Form.Control type="text" placeholder="Teléfono" isInvalid={!!errors.phone} isValid={touchedFields.phone && !errors.phone}
                        {...register('phone')} />
                    <Form.Control.Feedback>Correcto!!!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">{errors?.phone?.message}</Form.Control.Feedback>
                </Form.Group>
                {/* Estudios ---> schooling */}
                <Form.Group className='d-flex flex-column align-items-start pb-3 col-lg-8'>
                    <Form.Label className={s.label_volunt}>Estudios</Form.Label>
                </Form.Group>
                <Form.Group className='d-flex flex-row align-items-start pb-2 col-lg-8'>
                    <FormCheckInput type='radio' id="sec" value='secundario' {...register('schooling')} />
                    <FormCheckLabel htmlFor='sec' className='ms-2' >Secundario</FormCheckLabel>
                </Form.Group>
                <Form.Group className='d-flex flex-row align-items-start pb-2 col-lg-8'>
                    <FormCheckInput type='radio' id="tech" value='tecnico'  {...register('schooling')} />
                    <FormCheckLabel className='ms-2' htmlFor="tech">Técnico</FormCheckLabel>
                </Form.Group>
                <Form.Group className='d-flex flex-row align-items-start pb-2 col-lg-8'>
                    <FormCheckInput type='radio' id="univ" value='universitario' {...register('schooling')} />
                    <FormCheckLabel className='ms-2' htmlFor="univ">Universitario</FormCheckLabel>
                </Form.Group>
                {/* Profesión ---> profession */}
                <Form.Group className='d-flex flex-column align-items-start pb-3 col-lg-8'>
                    <Form.Label className={s.label_volunt}>Profesión u ocupación (en caso de ser estudiante, especificar de qué carrera)</Form.Label>
                    <Form.Control type="text" placeholder="Profesión" isInvalid={!!errors.profession} isValid={touchedFields.profession && !errors.profession}
                        {...register('profession')} />
                    <Form.Control.Feedback>Correcto!!!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">{errors?.profession?.message}</Form.Control.Feedback>
                </Form.Group>
                {/* ¿Cómo conociste a Grooming Argentina? ---> howKnowGrooming */}
                <Form.Group className='d-flex flex-column align-items-start pb-3 col-lg-8'>
                    <Form.Label className={s.label_volunt}>¿Cómo conociste a Grooming Argentina?</Form.Label>
                </Form.Group>
                <Form.Group className='d-flex flex-row align-items-start pb-2 col-lg-8'>
                    <FormCheckInput type='radio' id="face" value='facebook' {...register('howKnowGrooming')} />
                    <FormCheckLabel htmlFor='face' className='ms-2' >Facebook</FormCheckLabel>
                </Form.Group>
                <Form.Group className='d-flex flex-row align-items-start pb-2 col-lg-8'>
                    <FormCheckInput type='radio' id="insta" value='instagram'  {...register('howKnowGrooming')} />
                    <FormCheckLabel className='ms-2' htmlFor="insta">Instagram</FormCheckLabel>
                </Form.Group>
                <Form.Group className='d-flex flex-row align-items-start pb-2 col-lg-8'>
                    <FormCheckInput type='radio' id="twit" value='twitter' {...register('howKnowGrooming')} />
                    <FormCheckLabel className='ms-2' htmlFor="twit">Twitter</FormCheckLabel>
                </Form.Group>
                <Form.Group className='d-flex flex-row align-items-start pb-2 col-lg-8'>
                    <FormCheckInput type='radio' id="radio" value='radio' {...register('howKnowGrooming')} />
                    <FormCheckLabel htmlFor='radio' className='ms-2' >Radio</FormCheckLabel>
                </Form.Group>
                <Form.Group className='d-flex flex-row align-items-start pb-2 col-lg-8'>
                    <FormCheckInput type='radio' id="tv" value='televisión'  {...register('howKnowGrooming')} />
                    <FormCheckLabel className='ms-2' htmlFor="tv">Televisión</FormCheckLabel>
                </Form.Group>
                <Form.Group className='d-flex flex-row align-items-start pb-2 col-lg-8'>
                    <FormCheckInput type='radio' id="charla" value='charla' {...register('howKnowGrooming')} />
                    <FormCheckLabel className='ms-2' htmlFor="charla">Charla en Institución</FormCheckLabel>
                </Form.Group>
                <Form.Group className='d-flex flex-row align-items-start pb-2 col-lg-8'>
                    <FormCheckInput type='radio' id="conoc" value='conocido' {...register('howKnowGrooming')} />
                    <FormCheckLabel htmlFor='conoc' className='ms-2' >Por un/a conocido/a</FormCheckLabel>
                </Form.Group>
                <Form.Group className='d-flex flex-row align-items-start pb-2 col-lg-8'>
                    <FormCheckInput type='radio' id="otro" value='otros'  {...register('howKnowGrooming')} />
                    <FormCheckLabel className='ms-2' htmlFor="otro">Otros</FormCheckLabel>
                </Form.Group>
                {/* howManyHours ---> howManyHours */}
                <Form.Group className='d-flex flex-column align-items-start pb-3 col-lg-8'>
                    <Form.Label className={s.label_volunt}>¿Cuántas horas semanales podrías dedicarle al voluntariado?</Form.Label>
                    <Form.Control type="number" placeholder="0" isInvalid={!!errors.howManyHours} isValid={touchedFields.howManyHours && !errors.howManyHours}
                        {...register('howManyHours')} />
                    <Form.Control.Feedback>Correcto!!!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">{errors?.howManyHours?.message}</Form.Control.Feedback>
                </Form.Group>
                {/* Facebook ---> facebook */}
                <Form.Group className='d-flex flex-column align-items-start pb-3 col-lg-8'>
                    <Form.Label className={s.label_volunt}>Perfil de Facebook</Form.Label>
                    <Form.Control type="text" placeholder="https://www.facebook.com/tu_usuario"
                        isInvalid={!!errors.facebook} isValid={touchedFields.facebook && !errors.facebook}
                        {...register('facebook')} />
                    <Form.Control.Feedback>Correcto!!!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">{errors?.facebook?.message}</Form.Control.Feedback>
                </Form.Group>
                {/* Twitter ---> twitter */}
                <Form.Group className='d-flex flex-column align-items-start pb-3 col-lg-8'>
                    <Form.Label className={s.label_volunt}>Perfil de Twitter</Form.Label>
                    <Form.Control type="text" placeholder=" https://www.twitter.com/tu_usuario" isInvalid={!!errors.twitter} isValid={touchedFields.twitter && !errors.twitter}
                        {...register('twitter')} />
                    <Form.Control.Feedback>Correcto!!!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">{errors?.twitter?.message}</Form.Control.Feedback>
                </Form.Group>
                {/* Instagram ---> instagram */}
                <Form.Group className='d-flex flex-column align-items-start pb-3 col-lg-8'>
                    <Form.Label className={s.label_volunt}>Perfil de Instagram</Form.Label>
                    <Form.Control type="text" placeholder=" https://www.instagram.com/tu_usuario" isInvalid={!!errors.instagram} isValid={touchedFields.instagram && !errors.instagram}
                        {...register('instagram')} />
                    <Form.Control.Feedback>Correcto!!!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">{errors?.instagram?.message}</Form.Control.Feedback>
                </Form.Group>
                {/* LinkedIn ---> linkedIn */}
                <Form.Group className='d-flex flex-column align-items-start pb-3 col-lg-8'>
                    <Form.Label className={s.label_volunt}>Perfil de LinkedIn</Form.Label>
                    <Form.Control type="text" placeholder=" https://www.linkedIn.com/tu_usuario" isInvalid={!!errors.linkedIn} isValid={touchedFields.linkedIn && !errors.linkedIn}
                        {...register('linkedIn')} />
                    <Form.Control.Feedback>Correcto!!!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">{errors?.linkedIn?.message}</Form.Control.Feedback>
                </Form.Group>
                {/* Pdf Dni ---> adjDocument */}
                <Form.Group className='d-flex flex-column align-items-start pb-3 col-lg-8'>
                    <Form.Label className={s.label_volunt}>Dni en Formato pdf</Form.Label>
                    <Form.Control type="file" isInvalid={!!errors.adjDocument} isValid={touchedFields.adjDocument && !errors.adjDocument}
                        {...register('adjDocument')} />
                    <Form.Control.Feedback>Correcto!!!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">{errors?.adjDocument?.message}</Form.Control.Feedback>
                </Form.Group>
                {/* Pdf CV ---> CV */}
                <FormGroup className='d-flex flex-column align-items-start pb-3 col-lg-8'>
                    <Form.Label className={s.label_volunt}>Curriculum Vitae</Form.Label>
                    <Form.Control type="file" placeholder="Adjunte la pdf de su CV" isInvalid={!!errors.CV} isValid={touchedFields.CV && !errors.CV}
                        {...register('CV')} />
                    <Form.Control.Feedback>Correcto!!!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">{errors?.CV?.message}</Form.Control.Feedback>
                </FormGroup>
                {/* opinion ---> opinion */}
                <Form.Group className='d-flex flex-column align-items-start pb-3 col-lg-8'>
                    <Form.Label className={s.label_volunt}>¿Cómo definirías el grooming?</Form.Label>
                    <Form.Control as="textarea" placeholder="Opinión" isInvalid={!!errors.opinion} isValid={touchedFields.opinion && !errors.opinion}
                        {...register('opinion')} />
                    <Form.Control.Feedback>Correcto!!!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">{errors?.opinion?.message}</Form.Control.Feedback>
                </Form.Group>
                {/* ¿Conocés a alguien dentro de Grooming Argentina? ---> knowGroominPerson */}
                <Form.Group className='d-flex flex-column align-items-start pb-3 col-lg-8'>
                    <Form.Label className={s.label_volunt}>¿Conocés a alguien dentro de Grooming Argentina?</Form.Label>
                </Form.Group>
                <Form.Group className='d-flex flex-row align-items-start pb-2 col-lg-8'>
                    <FormCheckInput type='radio' id="true" value='si' {...register('knowGroominPerson')} />
                    <FormCheckLabel htmlFor='true' className='ms-2' >Si</FormCheckLabel>
                </Form.Group>
                <Form.Group className='d-flex flex-row align-items-start pb-2 col-lg-8'>
                    <FormCheckInput type='radio' id="false" value='no'  {...register('knowGroominPerson')} />
                    <FormCheckLabel className='ms-2' htmlFor="false">No</FormCheckLabel>
                </Form.Group>
                {/* A quien conoces? ---> whoGroominPerson */}
                <Form.Group className='d-flex flex-column align-items-start pb-3 col-lg-8'>
                    <Form.Label className={s.label_volunt}>Si tu respuesta anterior fue Si, contanos a quién conocés.</Form.Label>
                    <Form.Control type="text" placeholder="Nombra a la persona" isInvalid={!!errors.whoGroominPerson} isValid={touchedFields.whoGroominPerson && !errors.whoGroominPerson}
                        {...register('whoGroominPerson')} />
                    <Form.Control.Feedback>Correcto!!!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">{errors?.whoGroominPerson?.message}</Form.Control.Feedback>
                </Form.Group>
                {/* motivación? ---> whyGroomin */}
                <Form.Group className='d-flex flex-column align-items-start pb-3 col-lg-8'>
                    <Form.Label className={s.label_volunt}>¿Por qué te gustaría ser voluntario/a de Grooming Argentina?</Form.Label>
                    <Form.Control as="textarea" placeholder="Tú motivación" isInvalid={!!errors.whyGroomin} isValid={touchedFields.whyGroomin && !errors.whyGroomin}
                        {...register('whyGroomin')} />
                    <Form.Control.Feedback>Correcto!!!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">{errors?.whyGroomin?.message}</Form.Control.Feedback>
                </Form.Group>
                {/* tematica ---> theme */}
                <Form.Group className='d-flex flex-column align-items-start pb-3 col-lg-8'>
                    <Form.Label className={s.label_volunt}> ¿Cuál es tu interés en la temática?</Form.Label>
                    <Form.Control as="textarea" placeholder="Temática de interés" isInvalid={!!errors.theme} isValid={touchedFields.theme && !errors.theme}
                        {...register('theme')} />
                    <Form.Control.Feedback>Correcto!!!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">{errors?.theme?.message}</Form.Control.Feedback>
                </Form.Group>
                {/* espectativas ---> expectations */}
                <Form.Group className='d-flex flex-column align-items-start pb-3 col-lg-8'>
                    <Form.Label className={s.label_volunt}> ¿Cuáles son tus expectativas dentro de la ONG?</Form.Label>
                    <Form.Control as="textarea" placeholder="Espectativas" isInvalid={!!errors.expectations} isValid={touchedFields.expectations && !errors.expectations}
                        {...register('expectations')} />
                    <Form.Control.Feedback>Correcto!!!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">{errors?.expectations?.message}</Form.Control.Feedback>
                </Form.Group>
                <br />
                <Form.Group className='d-flex flex-column align-items-center pb-3 col-lg-8'>
                    <Button type="submit">Crear</Button>
                </Form.Group>
            </Form>
        </Container >
    );
};


export default VolunteerForm;