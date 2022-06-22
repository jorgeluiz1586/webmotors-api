const app = require('../server');
const controller = require('../app/controllers/HomeController');
const HomeController = new controller.HomeController();

app.app.get('/', (req, res) => {
  HomeController.index(req, res);
});

exports.app = app.app;