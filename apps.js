const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const User = require('./public/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const mongo_uri = 'mongodb+srv://juan:juanariza2000@cluster0.gynmq.mongodb.net/Seguridad?retryWrites=true&w=majority';

app.post('/save', async (req, res) => {

    try {
        const nuevaUsuario = new User({
            username: req.body.username,
            password: req.body.password,
        })

        let resultado = await nuevaUsuario.save();

        // res.send("Creando una tarea...");
        res.json(resultado);
        
        

    } catch (error) {
        res.status(500).send(error);

    }
    function redireccionar(){
        window.locationf="http://www.cristalab.com";
    } 
    redireccionar()

});

mongoose.connect(mongo_uri, function (err) {
    if (err) {
        throw err;
    } else {
        console.log('Successfully connected to ${mongo_uri}');
    }

});

app.listen(3000);


