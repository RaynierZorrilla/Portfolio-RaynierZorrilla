/*const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', (req, res) => {
    const output = `
        <p>Tienes un nuevo mensaje de contacto</p>
        <h3>Detalles del contacto</h3>
        <ul>  
            <li>Nombre: ${req.body.nombre}</li>
            <li>Teléfono: ${req.body.telefono}</li>
            <li>Email: ${req.body.email}</li>
            <li>Tema: ${req.body.tema}</li>
        </ul>
        <h3>Mensaje</h3>
        <p>${req.body.mensaje}</p>
    `;

    // Crea el objeto de transporte con la configuración del servidor SMTP
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'zorrillaraynier2003@gmail.com', // Tu correo electrónico
            pass: 'Samurai2402' // Tu contraseña de correo electrónico
        }
    });

    // Configura las opciones del correo electrónico
    let mailOptions = {
        from: '"Formulario de Contacto" <zorrillaraynier2003@gmail.com>', // dirección del remitente
        to: 'zorrillaraynier2003@gmail.com', // lista de receptores
        subject: 'Nuevo Mensaje de Contacto', // Asunto del correo
        html: output // cuerpo del correo en HTML
    };

    // Envía el correo con el objeto de transporte definido
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Mensaje enviado: %s', info.messageId);
        res.send('Email enviado');
    });
});

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});*/
