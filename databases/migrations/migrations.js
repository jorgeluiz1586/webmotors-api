const user_migration = require('./2022_06_30_163245_create_user_table');
const car_migration = require('./2022_06_30_164658_create_car_table');

async function migrate() {
  await user_migration.migrate();
  await car_migration.migrate();
}

migrate()