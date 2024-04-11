const nodemailer = require("nodemailer");

const correoOrigen = "lcascante@ucenfotec.ac.cr";

const smtpOptions = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: correoOrigen,
    pass: "iyry stdi wabu pmly",
  },
};

async function sendEmail(datosCorreo) {
  console.log("Enviando correo", datosCorreo);

  const transporter = nodemailer.createTransport(smtpOptions);

  try {
    await transporter.sendMail({
      from: correoOrigen,
      subject: datosCorreo.subject,
      to: datosCorreo.correoUsuario,
      html: datosCorreo.html,
    });
  } catch (error) {
    console.error("Error al enviar correo", error);
  }
}

module.exports = sendEmail;
