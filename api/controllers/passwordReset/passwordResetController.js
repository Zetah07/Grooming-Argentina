require("dotenv").config()
const user = require("../../models/user");
const nodemailer = require("nodemailer");


const handlePasswordReset = async (req, res) => {
  const { email } = req.body;
  try {
    const User = await user.findOne({ email });
    if (!User) {
      return res.status(400).json({
        message: "Correo no registrado",
      });
    }


    const token = Math.random().toString(36).substr(2);


    User.resetPasswordToken = token;
    User.resetPasswordExpires = Date.now() + 3600000;


    await User.save();


    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });


    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: User.email,
      subject: "Password Reset",
      text: `Usted está recibiendo este correo porque solicitó el cambio de contraseña para su cuenta de Grooming Argentina.\n\n
        por favor haga click en el enlace o copie la dirección en su navegador para continuar con el proceso:\n\n
        ${process.env.REACT_APP_API}/recuperar/${token} \n\n
        Si usted no envió esta solicitud, ignore este mensaje y su contraseña se mantendra igual.\n`,
    };


    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          message: "Error al enviar el mail",
        });
      } else {
        console.log("Email sent: " + info.response);
        return res.status(200).json({
          message: "Correo enviado al Email registrado en la cuenta",
        });
      }
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = handlePasswordReset;