const model = require('../models/Home');
const Home = new model.Home();

const HomeController = class HomeController {
  index(req, res) {
    var users = Home.get();
    res.status(200).json(users);
  }
}

module.exports.HomeController = HomeController;