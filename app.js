const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const pathJS = require('path');
const multer = require('multer');
const bodyParser = require('body-parser');
const fs = require('fs'); //i used it to delete file in uploads
require('dotenv').config();
const cron = require('cron');

const port = process.env.PORT;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.json());  //needed for DELETE 

const uploadDir = pathJS.join(__dirname, 'uploads');  //needed for a DELETE request


app.use(express.static('website'));

var Storage = multer.diskStorage({
  destination:function(req,file,callback){
    callback(null, './uploads');
  },
  filename:function(req,file,callback){
    callback(null, file.originalname)
  }
});

var upload = multer({storage:Storage}).single('fileCV');


app.get('/', (req, res) => {
  res.sendFile('CV.html');
});


app.post('/uploads', (req, res) => {
  console.log('File upload request received');
  upload(req, res, function (err) {
    if (err) {
      console.error('Error during file upload:', err);
      return res.status(500).send('Something went wrong');
    } else {
      const uploadedFile = req.file;
      const pathFile = uploadedFile.path;
      console.log('File uploaded successfully:', pathFile);
      res.status(200).send(pathFile);
    }
  });
});

app.post('/sendform', upload, (req, res) =>{
  
  // middleware to uploads image
    if(req.file){
      const name = req.body.name;
      const surname = req.body.surname;

      const pathFile = req.file.path;

      const transporter = nodemailer.createTransport({
          host: process.env.EMAIL_KEY_HOST,
          port: 465,
          secure: true,
            auth: {
              user: process.env.EMAIL_KEY,
              pass: process.env.EMAIL_KEY_PASSWORD
            }
          })
        
          const mailOptions = {
            from: process.env.EMAIL_KEY,
            to: process.env.EMAIL_KEY,
            subject: `CV from ${req.body.email}: ${req.body.name}, ${req.body.surname}`,
            priority: 'high', //there should be no spam messages
            text: `Imię: ${req.body.name}, ${req.body.surname}\n
            Stanowisko: ${req.body.selectedJob}\n
            E-mail: ${req.body.email}\n
            Numer telefonu: ${req.body.phone}\n
            Kraj: ${req.body.country}\n
            Miasto: ${req.body.city}\n
            Obywatelstwo: ${req.body.citizenship}\n
            Data urodzenia: ${req.body.birth}\n
            Płeć: ${req.body.sexSelect}\n
            Czy VISA potrzebna: ${req.body.visaSelect}\n
            Wiadomość: ${req.body.message}
            `,
            attachments:[
              {
                path:pathFile
              }
            ]
          }
          transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
              console.log(err);
              return res.send('Error sending email');
          } else {
              console.log('Email sent');

              // Delete the uploaded file after the email is sent successfully
              const filePath = pathJS.join(uploadDir, req.file.filename);
              fs.unlink(filePath, (unlinkErr) => {
                  if (unlinkErr) {
                      console.log('Error deleting file:', unlinkErr);
                  } else {
                      console.log('File deleted');
                      return res.redirect('/offers.html');
                  }
              });
          }
      });
    } else{
      const name = req.body.name;
      const surname = req.body.surname;
     

      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_KEY_HOST,
        port: 465,
        secure: true,
            auth: {
              user: process.env.EMAIL_KEY,
              pass: process.env.EMAIL_KEY_PASSWORD
            }
          })
        
          const mailOptions = {
            from: process.env.EMAIL_KEY,
            to: process.env.EMAIL_KEY,
            subject: `CV from ${req.body.email}: ${req.body.name}, ${req.body.surname}`,
            priority: 'high', //there should be no spam messages
            text: `Imię: ${req.body.name}, ${req.body.surname}\n
            Stanowisko: ${req.body.selectedJob}\n
            E-mail: ${req.body.email}\n
            Numer telefonu: ${req.body.phone}\n
            Kraj: ${req.body.country}\n
            Miasto: ${req.body.city}\n
            Obywatelstwo: ${req.body.citizenship}\n
            Data urodzenia: ${req.body.birth}\n
            Płeć: ${req.body.sexSelect}\n
            Czy VISA potrzebna: ${req.body.visaSelect}\n
            Wiadomość: ${req.body.message}
            `,
            
          }
          transporter.sendMail(mailOptions, function (err, info) {
            
    
            if (err) {
              console.log(err);
              return res.send('Error sending email');
          } else {
              console.log('Email sent');
              return res.redirect('/offers.html');
          }
          });
    }
  
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handling submitted data from the form
app.post('/sendContact', (req, res) => {
  const { nameContact, surnameContact, emailContact, phoneContact, messageContact } = req.body;

  // Configuring the transporter for sending e-mails
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_KEY_HOST,
    port: 465,
    secure: true,
      auth: {
        user: process.env.EMAIL_KEY,
        pass: process.env.EMAIL_KEY_PASSWORD
      }
  });

  // Email configuration
  const mailOptions = {
      from: process.env.EMAIL_KEY,
      to: process.env.EMAIL_KEY,
      subject: `Contact form from ${req.body.emailContact}, ${nameContact}, ${surnameContact}`,
      text: `
          Name: ${nameContact}
          Surname: ${surnameContact}
          Email: ${emailContact}
          Phone: ${phoneContact}
          Message: ${messageContact}
      `
  };

  // Sending an email
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      res.redirect('/index.html');
  });
});


// Schedule a job to run every day at a specific time
const cleanupJob = new cron.CronJob('0 0 */1 * * *', async function () {

  try {

      // Delete files older than a certain threshold (1hour)
      const thresholdTime = new Date(Date.now() - 1 * 60 * 60 * 1000);

      const files = await fs.promises.readdir(uploadDir);

      for (const file of files) {
          const filePath = pathJS.join(uploadDir, file);
          const fileStats = await fs.promises.stat(filePath);

          if (fileStats.isFile() && fileStats.mtime < thresholdTime) {
              await fs.promises.unlink(filePath);
          }
      }

      console.log('Cleanup job completed.');
  } catch (error) {
      console.error('Error during cleanup job:', error);
  }
}, null, true, 'UTC');

cleanupJob.start();


app.listen(port, () =>{
  console.log("App started")
  
})


app.use('/website/java-script', express.static(pathJS.join(__dirname, 'website', 'java-script'), {
  setHeaders: (res, pathJS) => {
    if (pathJS.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  },
}));

