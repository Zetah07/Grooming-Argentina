require('dotenv').config();
const denounces = require('../../models/denounces');
const nodemailer = require('nodemailer');

const createDenounce = async (req, res) => {
  const denounce = new denounces(req.body);

  try {
    if (!denounce.situation) {
      return res
        .status(400)
        .json({ message: 'por favor ingrese que situación quiere denunciar' });
    }
    if (!denounce.where) {
      return res
        .status(400)
        .json({ message: 'por favor ingresar donde viste el contenido' });
    }
    if (!denounce.link) {
      return res
        .status(400)
        .json({ message: 'por favaor ingrese detalles del sitio web' });
    }
    if (!denounce.description) {
      return res
        .status(400)
        .json({ message: 'por favor ingrese una descripción' });
    }

    const newDenounce = await denounce.save();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_DENOUNCES,
      subject: 'Nueva denuncia recibida',
      text: `Se ha recibido una nueva denuncia con la siguiente descripción:\n\n${denounce.description}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    res.status(201).json(newDenounce);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports = { createDenounce };
