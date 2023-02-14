/* eslint-disable react/jsx-no-target-blank */
import React, {useRef} from 'react'
import './Contact.module.css'
import emailjs from '@emailjs/browser';

const {
  EMAIL_SERVICE, EMAIL_TEMPLATE, EMAIL_USER,
} = process.env;

const Contact = () => {
  const form = useRef();

  const sendEmail =(e) =>{
    e.preventDefault();

    emailjs.sendForm(EMAIL_SERVICE,EMAIL_TEMPLATE, form.current,EMAIL_USER )
    e.target.reset()
  }
  return (
    <section id='contact'>
      <h5>Ponerse en contacto</h5>
      <h2>Contactame</h2>
      <div className='contact-container'>
        <div className='contact-options'>
          <article className='contact-option'>
            <h3>Email</h3>
            <a href='mailto:contacto@groomingarg.org'target='_blank' >Envia el mensaje</a>
          </article>

          <article className='contact-option'>
            <h3>WhatsApp</h3>
            <a href='https://wa.me/+5491124811722' target='_blank' >WhatsApp</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='' placeholder='Escribe tu nombre completo' required />
          <input type='email' name='email' placeholder='Escribe tu email' required />
          <textarea name='message' rows='15' placeholder='Escribe tu mensaje' required />
          <button type='submit'>Enviar</button>
        </form>
      </div>
    </section>

  )
}

export default Contact