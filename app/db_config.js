module.exports = {
    mssql_db: {
      user: 'sa',
      password: '1234',
      server: 'localhost\\SQLEXPRESS',
      database: 'DB_Test',
      pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 1
      }
    }
  };
  