const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 25,
  auth: {
    user: 'cartoplasticweb@gmail.com',
    pass: require('./config/keys').nodemailer
  },
  tls: {
    rejectUnauthorized: false
  }
});

app.post('/contact', (req, res) => {
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

  return res.status(200).json({ msg: 'Message sent' });
});

if (process.env.NODE_ENV == 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
