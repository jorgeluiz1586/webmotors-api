const database = require('../../config/database');
const db = database.db;

function migrate() {
  db.query(`CREATE TABLE users (
      id bigint auto_increment primary key unique,
      name varchar(250) not null,
      first_name varchar(250) not null,
      last_name varchar(250) not null,
      email varchar(250) not null,
      email_confirmation varchar(250) null,
      password varchar(60) not null,
      phone varchar(60) not null,
      phone_confirmation varchar(60) null,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) DEFAULT CHARACTER SET UTF8;`
  );
}

exports.migrate = () => migrate()