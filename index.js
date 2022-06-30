const routes = require('./routes/api');
const app = routes.app;
path = require('path');



app.listen(8080, function() {
  console.log('listen in http://localhost:8080');
});