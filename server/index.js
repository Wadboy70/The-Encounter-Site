const path = require('path');
const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3001;
console.log(process.env)

const publicPath = path.join(__dirname, '..','build');

app.use(express.static(publicPath));

app.get('*', (req,res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
    console.log(publicPath);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port} :)`);
});