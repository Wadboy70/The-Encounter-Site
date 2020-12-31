const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const fetch = require('node-fetch');
require('dotenv').config({path:__dirname+'/./../.env'});
const publicPath = path.join(__dirname, '..','build');
const api_key = process.env.MAILGUN_API_KEY;
const domain = process.env.MAILGUN_DOMAIN;
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const RECAPTCHA_KEY = process.env.RECAPTCHA_KEY;
const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});


app.use(bodyParser.json());
app.use(express.static(publicPath));
app.use(cors());

app.post('/sendMail', (req, res) => { 

    const body = req.body || {};
    const data = {
    from: `${body.name || 'no name'} <me@samples.mailgun.org>`,
    to: process.env[body.to] || process.env.DEFAULT_EMAIL, //change this email
    subject: body.subject || 'contact email',
    text: body.text || 'no message'
    };
    
    mailgun.messages().send(data, (error, body) => {
        res.json({error,body});
    });
});

app.get('/checkLive', (req, res) => { 
    const checkLive = async(url) => {
        try{
            await fetch(url)
            .then(val => {
                return val.text();
            })
            .then(html => {
                let val = html.search('{"text":" watching"}');
                res.send({live: val !== -1});
            });
        } catch(err){
            res.send({err, message:'error', live: true})
        }
    };
    checkLive("https://www.youtube.com/user/arthurhintonmusic/live");
});
app.get('/recentVideos', (req, res) => { 
    const recentContent = async() => {
        try{
            let live = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=UC_iDvnXDiDqg7u1cO-V41Mw&part=snippet,id&order=date&maxResults=10`)
            .then(val => {
                return val.json();
            })
            .then(response => response);
            res.json(live);
        } catch(err){
            res.send({err, message:'error', live: false});
        }
    };
    recentContent();
});
app.get('/recaptcha', (req, res) => {
    res.send({recaptcha: RECAPTCHA_KEY}); 
});
app.get('*', (req,res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port} :)`);
});

