const express = require('express');
const app = express();
const path = require('path');
let nodemon = require('nodemon')
app.use(express.static('public'));

 
})
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/
login.html'));
})

app.get('/dashboard', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/
dashboard.html'));
})
app.get('/reserve', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/
reserve.html'))
})
app.get('/destaques', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/
destaques.html'))
})
app.use(express.static(path.resolve(__dirname, '../
public/')));


app.listen(3030, function() {
    console.log("Servidor LEVANTADO");

});