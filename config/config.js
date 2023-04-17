// require('dotenv').config();
// const {DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_DIALECT} = process.env;

module.exports = {
  // "development": {
  //   "username": DB_USERNAME,
  //   "password": DB_PASSWORD,
  //   "database": DB_NAME,
  //   "host": DB_HOST,
  //   "dialect": DB_DIALECT
  // },

    development: {
      username: "postgres",
      password: "Ressy931",
      database: "binar_challenge_4",
      host: "localhost",
      dialect: "postgres"
  }
  // ini cuman buat ngedeploy, sekarang ga kepakai
  // "test": {
  //   "username": DB_USERNAME,
  //   "password": DB_PASSWORD,
  //   "database": DB_NAME,
  //   "host": DB_HOST,
  //   "dialect": DB_DIALECT
  // },
  // "production": {
  //   "username": DB_USERNAME,
  //   "password": DB_PASSWORD,
  //   "database": DB_NAME,
  //   "host": DB_HOST,
  //   "dialect": DB_DIALECT
  // }
}
