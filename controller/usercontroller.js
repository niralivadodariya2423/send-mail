var usermodel = require('../model/usermodel');           
var nodemailer = require('nodemailer');

exports.insert = async(req,res) =>{
    // var data = await usermodel.create(req.body);


    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'niralivadodariya53@gmail.com',
          pass: 'jxka moqh dgyu uouk'
        }        
      });
      
      var mailOptions = {
        from: 'niralivadodariya@gmail.com',
        to: req.body.email,
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });


      res.status(200).json({
        status:"mail send"
      })
}


