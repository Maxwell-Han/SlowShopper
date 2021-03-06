const Sequelize = require('sequelize');
const pkg = require('../../package.json');

if (process.env.NODE_ENV == 'AWS') require('../../secrets');

const databaseName =
  pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '');

let db;
if (process.env.NODE_ENV === 'AWS') {
  db = new Sequelize(
    process.env.AWS_DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
      dialect: 'postgres',
      host: process.env.HOST,
      port: 5432
    }
  );
} else {
  db = new Sequelize(
    process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
    {
      logging: false
    }
  );
}

module.exports = db;

// This is a global Mocha hook used for resource cleanup.
// Otherwise, Mocha v4+ does not exit after tests.
if (process.env.NODE_ENV === 'test') {
  after('close database connection', () => db.close());
}
