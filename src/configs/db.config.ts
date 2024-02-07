const env = process.env;
const db = {
    host: env.DB_HOST ?? '',
    user: env.DB_USER ?? '',
    password: env.DB_PASSWORD ?? '',
    database: env.DB_NAME ?? '',
    port: Number(env.DB_PORT) ?? 3306,
    dbDriver: env.DB_DRIVER ?? 'mysql'
};
export default db;