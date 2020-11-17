const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config({path:__dirname+'/./../.env'});
const publicPath = path.join(__dirname, '..','build');
const api_key = process.env.MAILGUN_API_KEY;
const domain = process.env.MAILGUN_DOMAIN;
const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

app.use(bodyParser.json());
app.use(express.static(publicPath));

app.post('/sendMail', (req, res) => { 

    const body = req.body || {};
    console.log(body);
    const data = {
    from: `${body.name || 'no name'} <me@samples.mailgun.org>`,
    to: body.to || process.env.DEFAULT_EMAIL, //change this email
    subject: body.subject || 'contact email',
    text: body.text || 'no message'
    };
    
    mailgun.messages().send(data, (error, body) => {
        res.json({error,body});
    });
});

app.get('*', (req,res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port} :)`);
});

