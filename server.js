require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.DATABASE_URL);
const databse = mongoose.connection;

databse.on('error' ,(error) => {
    console.error(error)
})

databse.once( 'open' ,() => {
    console.log('its all gone right')
})

app.use(express.json())
const logindetails = require('./route/login')

app.use('/login', logindetails)

app.listen(3000 , () => {
    console.log('server started')
});