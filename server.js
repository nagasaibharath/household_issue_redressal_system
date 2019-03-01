const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

//serve react static files.
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res) => {
    console.log(req);
    res.json(req.query);
})

app.post('/login',(req,res) => {
    res.json({
        validUser: true,
        isAdmin: false
    });
})

app.post('/feed',(req,res) => {
    res.json({
        issues: ['issue1','issue2','issue3','issues from '+req.body.email ]
    });
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port, () => {
    console.log(`server running on : "http://localhost:${port}"`);
})