const database = require('../../config/database');
const db = database.db;

const Car = class Car {
  get() {
    let cars = [];
    db.query('SELECT * FROM cars', (error, results, fields) => {
      if (error) throw error;
      cars = results;
    });

    return cars;
  }
}

module.exports.Car = Car;
