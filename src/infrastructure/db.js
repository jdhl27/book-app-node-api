const Sqlite3 = require('sqlite3').verbose();

exports.db = () => {
    return new Sqlite3.Database("./src/infrastructure/bookstore.db");

  }