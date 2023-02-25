import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import emailjs from "@emailjs/browser";
import style from "./Contact.module.css";

const Contact = () => {
  const form = useRef();

  const {
    REACT_APP_EMAIL_SERVICE,
    REACT_APP_EMAIL_TEMPLATE,
    REACT_APP_EMAIL_USER,
  } = process.env;

  const sendEmail = async (event) => {
    event.preventDefault();

    try {
      await emailjs.sendForm(
        REACT_APP_EMAIL_SERVICE,
        REACT_APP_EMAIL_TEMPLATE,
        form.current,
        REACT_APP_EMAIL_USER
      );
      showAlert("Email enviado correctamente!", "green");
      form.current.reset();
    } catch (error) {
      console.error("Email failed to send", error);
      showAlert(
        "el email no se pudo enviar, por favor intente más tarde",
        "red"
      );
    }
  };

  const showAlert = (message, color) => {
    const alertDiv = document.createElement("div");
    alertDiv.classList.add("alert", "text-center");

    if (color === "green") {
      alertDiv.classList.add("alert-success");
    } else if (color === "red") {
      alertDiv.classList.add("alert-danger");
    }

    alertDiv.textContent = message;
    document.body.appendChild(alertDiv);

    setTimeout(() => {
      alertDiv.classList.add("hide");
      setTimeout(() => {
        document.body.removeChild(alertDiv);
      }, 600);
    }, 3000);
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
