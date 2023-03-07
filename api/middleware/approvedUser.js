require("dotenv").config()
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const user = require("../models/user");
const userStatus = require("../models/userStatus");

const approvedUser = async (id) => {
  try {
    const approvedStatus = await userStatus.findById(id);
    if (!approvedStatus || approvedStatus.status !== 'aprobado') {
      throw new Error('Identificación de usuario no valida');
    }

    const documentString = (approvedStatus.document);
    const hashedPassword = await bcrypt.hash(documentString, 10);

    const duplicate = await user.findOne({ username: approvedStatus.document }).exec();
    if (duplicate) {
      throw new Error('El usuario cono ese número de documento ya existe.');
    }

    const newUser = new user({
      username: approvedStatus.document,
      email: approvedStatus.email,
      name: `${approvedStatus.name} ${approvedStatus.lastName}`,
      password: hashedPassword,
      rol: "volunteer"
    });
    await newUser.save();


    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: approvedStatus.email,
      subject: 'Ha sido aprobado para el programa de voluntarios Gooming Argentina',
      text: `Hola ${approvedStatus.name},\n\nha sido aceptado para el programa de voluntarios de Gooming Argentina. por favor iniciar sesión con los siguientes datos:\n\nUsuario: ${approvedStatus.document}\nContraseña: ${documentString}\n\nle recomendamos cambiar su contraseña una vez haya iniciado sesión por primera vez.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    return newUser;
  } catch (error) {
    console.error(error);
    throw new Error('No se pudo crear el usuario');
  }
};

module.exports = approvedUser;
