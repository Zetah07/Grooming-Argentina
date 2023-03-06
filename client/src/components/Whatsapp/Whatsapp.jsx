import React, { useState, useEffect, useRef } from "react";
import styles from "./Whatsapp.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const WhatsApp = ({ phoneNumber }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const ref = useRef();

  const handleToggle = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };
  const handleSend = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
    setMessage("");
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div className={styles.whatsapp} ref={ref}>
      {!isOpen && (
        <div className={styles.chatIcon} onClick={handleToggle}>
          <i className="bi bi-whatsapp"></i>
        </div>
      )}
      {isOpen && (
        <div className={`${styles.chatWindow}`}>
          <div className={`${styles.chatTitle}`}></div>
          <div className={`${styles.chatTitle}`}>
            <img
              src={require("../../../src/assets/logoChat.png")}
              alt="logoChat"
              className={styles.logoChat}
            />
            Grooming Argentina
          </div>
          <div className={styles.messageList}>
            <div className={styles.message}>
              <div className={styles.messageText}>Hola!</div>
            </div>
            {<div className={styles.messageText}>¿Necesitas ayuda?</div>}
          </div>
          <div className={styles.messageInput}>
            <input
              type="text"
              placeholder="Escribe tu mensaje..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={handleSend}>Denunciar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsApp;
