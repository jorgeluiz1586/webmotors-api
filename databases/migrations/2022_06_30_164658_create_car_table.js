const database = require('../../config/database');
const db = database.db;

function migrate() {
  db.query(`CREATE TABLE cars (
      id bigint auto_increment primary key unique,
      model varchar(250) not null,
      maker varchar(250) not null,
      marker_origin varchar(250) not null,
      color varchar(250) not null,
      price double(15, 2) not null,
      version varchar(250) not null,
      country varchar(250) not null,
      state varchar(250) not null,
      description text(1000) not null,
      seller_name varchar(250) not null,
      seller_phone varchar(250) not null,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
	    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) DEFAULT CHARACTER SET UTF8;`
  );
}

exports.migrate = () => migrate()