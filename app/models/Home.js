const db = require('../../config/database');

const Home = class Home {
  get() {
    var users = [];
    db.db.query('SELECT * FROM users', (error, results, fields) => {
      if (error) throw error;
      users = results;
    });

    return users;
  }
}

module.exports.Home = Home;
