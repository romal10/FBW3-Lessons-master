const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();


app.get('/',(req,res)=>{
   // res.send('<h1>Contact form </h1>');    
   res.render('contact', {layout:false})
})



//static folder 
app.use('/public', express.static(path.join(__dirname,'public')))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// view engin setup
app.engine('handlebars',exphbs());
app.set('view engine','handlebars');

// recive the form data  
app.post('/send',(req,res)=>{

    console.log(req.body);
//    res.send('sent');
const output = `
 <p> you have new contact Email </p>
   <ul>
     <li> Name : ${req.body.name}  </li>
     <li> Company: ${req.body.company}  </li>
     <li> Email: ${req.body.email}  </li>
     <li> Phone: ${req.body.phone} </li>
   </ul>
   <h2> Message </h2>
   <p> ${req.body.message} </p>

`
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "mail.hamburg-coders.pro",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'dci@hamburg-coders.pro', // generated ethereal user
      pass: 'abc1234' // generated ethereal password
    },
    tls:{
        rejectUnauthorized:false
    }
  });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"student in dci " <student@gmail.com>', // sender address
        to: 'mansour.tumeh@gmail.com', // list of receivers
        subject: ' DCI Contact Email  ', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };
     
    // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);   
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    res.render('contact', {msg:'Email has been sent', layout:false});
});

    
})
app.listen(3004, ()=>{
    console.log('server started on port 3004 ');
    
})