const model = require('../models/Car');
const Car = new model.Car();

const CarController = class CarController {
  index(req, res) {
    var cars = Car.get();
    res.status(200).json(cars);
  }
}

module.exports.CarController = CarController;