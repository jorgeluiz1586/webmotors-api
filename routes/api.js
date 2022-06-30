const server = require('../server');
const app = server.app;
const homecontroller = require('../app/controllers/HomeController');
const carcontroller = require('../app/controllers/CarController');
const HomeController = new homecontroller.HomeController();
const CarController = new carcontroller.CarController();

app.get('/cars', (req, res) => {
  CarController.index(req, res);
});

app.post('/auth/signup', (req, res) => {
  console.log(req.body);
});

app.get('/', (req, res) => {
  HomeController.index(req, res);
});

exports.app = app;