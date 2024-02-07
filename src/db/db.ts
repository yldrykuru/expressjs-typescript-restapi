import dbConfig from '../configs/db.config';
import { Dialect, Sequelize } from 'sequelize';
const db = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dbDriver as Dialect
});

export default db;
