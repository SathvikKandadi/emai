import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const dbUrl = process.env.DATABASE_URL!;

const db = new Sequelize(dbUrl, {
  dialect: 'postgres',
  logging: false
});

// Testing connection
db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

export default db;

// Testing connection


// import { Sequelize } from 'sequelize';
// import dotenv from 'dotenv';

// dotenv.config();

// const dbUser = process.env.DB_USER!;
// const dbPass = process.env.DB_PASS!;
// const dbHost = process.env.DB_HOST!;
// const dbName = process.env.DB_NAME!;

// const sequelize = new Sequelize(dbName, dbUser, dbPass, {
//   host: dbHost,
//   dialect: 'postgres',
// });

// sequelize.authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch((error) => {
//     console.error('Unable to connect to the database:', error);
//   });