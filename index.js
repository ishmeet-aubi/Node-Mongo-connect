const express = require('express');
const port = 4000;
const app= express();
const mongoose = require('mongoose');
const userRoutes= require('./routes/routes');

app.use('/user',userRoutes)

mongoose.connect('mongodb://localhost/userdb', {useNewUrlParser: true});

app.listen(port, () => console.log('Server is active on port'))