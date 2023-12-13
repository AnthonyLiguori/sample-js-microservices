const expressApp = require('express');
const app = expressApp(); 
const port = 3001;
const routerCatalog = require('./routes');
app.use(routerCatalog);
app.listen(port, function() { console.log('Server listening on: ' + port); });