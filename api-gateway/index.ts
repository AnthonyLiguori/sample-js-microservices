//import express from 'express';
const expressApp = require('express');
const app = expressApp(); 
const port = 3000;
const routerApp = require('./routes');
app.use(routerApp);
app.listen(port, function() { console.log('Server listening on: ' + port); });