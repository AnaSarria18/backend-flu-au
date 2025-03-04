require('dotenv').config();

module.exports = {
  development: {
    use_env_variable: 'postgresql://flutterAu_owner:npg_LUW3xgAKds7r@ep-wispy-bar-a5oocbpq-pooler.us-east-2.aws.neon.tech/flutterAu?sslmode=require',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Permite conexiones SSL sin verificación estricta de certificado
      },
    },
  },
  test: {
    username: 'root',
    password: null,
    database: 'AutosBackend',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    use_env_variable: 'postgresql://flutterAu_owner:npg_LUW3xgAKds7r@ep-wispy-bar-a5oocbpq-pooler.us-east-2.aws.neon.tech/flutterAu?sslmode=require',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
};
