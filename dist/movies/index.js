"use strict";
const expressApp = require('express');
const app = expressApp();
const port = 3002;
const routerMovie = require('./routes');
app.use(routerMovie);
app.listen(port, function () { console.log('Server listening on: ' + port); });
