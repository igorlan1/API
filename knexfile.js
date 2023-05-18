const path = require("path")

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, "src", "database", "database.db")
    },

    pool: {
      /*
      abilitar a funcionabilidade de quando deletar uma nota, ele deletar em cascata as tags
      */
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)
    }
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "knex", "migrations")
    },
    useNullAsDefault: true
  },
};
