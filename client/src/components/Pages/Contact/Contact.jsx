import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import emailjs from "@emailjs/browser";
import style from "./Contact.module.css";

// const { EMAIL_SERVICE, EMAIL_TEMPLATE, EMAIL_USER } = process.env;

const Contact = () => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    const EMAIL_SERVICE = "service_8ggyea2";
    const EMAIL_TEMPLATE = "template_9rpwucg";
    const EMAIL_USER = "wx_Yw_885OqaG5o9a";

    emailjs.sendForm(EMAIL_SERVICE, EMAIL_TEMPLATE, form.current, EMAIL_USER);
    event.target.reset();
  };

  return (
    <section id="contact">
      <h2 className={style.title}>Ponerse en contacto</h2>
      <div className={style.contactContainer}>
        <div className={style.contact_container}>
          <article className={style.contact_option}>
            <h3 className={style.contact_link}>Email:</h3>
            <a
              href="mailto:contacto@groomingarg.org"
              target="_blank"
              rel="noopener noreferrer"
              className={style.icon}
            >
              <i className="bi bi-envelope-at"></i>
            </a>
          </article>

          <article className={style.contact_option}>
            <h3 className={style.contact_link}>WhatsApp:</h3>
            <a
              href="https://wa.me/+5491124811722"
              target="_blank"
              rel="noopener noreferrer"
              className={style.icon}
            >
              <i className="bi bi-whatsapp"></i>
            </a>
          </article>
        </div>
      </div>
      <Form ref={form} onSubmit={sendEmail} className={style.contactForm}>
        <Form.Group controlId="formName">
          <Form.Label className={style.form_label}>Nombre completo:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Escribe tu nombre completo"
            required
            className={style.formControl}
            name="name"
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label className={style.form_label}>Email:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Escribe tu email"
            required
            className={style.formControl}
            name="email"
          />
        </Form.Group>

        <Form.Group controlId="formSubject">
          <Form.Label className={style.form_label}>Asunto:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Escribe el asunto"
            required
            className={style.formControl}
            name="subject"
          />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label className={style.form_label}>Mensaje:</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Escribe tu mensaje"
            required
            className={style.formControl}
            name="message"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className={style.submitButton}>
          Enviar
        </Button>
      </Form>
    </section>
  );
};

export default Contact;
