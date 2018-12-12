const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 25,
  auth: {
    user: 'cartoplasticweb@gmail.com',
    pass: require('../../config/keys').nodemailer
  },
  tls: {
    rejectUnauthorized: false
  }
});

router.post('/contact', (req, res) => {
  let helperOptions = {
    from: '"Cartoplastic Web" <cartoplasticweb@gmail.com>',
    to: 'cartoplasticweb@gmail.com',
    subject: 'Nuevo Mensaje en el Website',
    text: req.body.message
  };
  transporter.sendMail(helperOptions, (error, info) => {
    if (error) console.log(error);
    console.log('Mail sent');
  });

  return res.status(200).json({ msg: 'Mail sent' });
});

module.exports = router;
