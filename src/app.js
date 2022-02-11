const express = require('express');
const app = express();
const path = require('path');
let nodemon = require('nodemon')
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/index.html'));

})

app.get('/manager', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/manager.
html'));
});
app.get('/home', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/home.html'));

})
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/login.html'));
})

app.get('/user', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/user.html'));
})
app.use(express.static(path.resolve(__dirname, '../public/')));

app.listen(3030, function() {
    console.log("Servidor LEVANTADO");
});