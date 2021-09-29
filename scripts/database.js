const mysql = require('mysql');
const { castDBTypeToJsonType } = require('./utils/types');
function createConnection() {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'test',
  });
  connection.queryPromise = function (query) {
    return new Promise((resolve, reject) => {
      this.query(query, (error, results, fields) => {
        if (error) {
          reject(error);
        }
        resolve({ results, fields });
      });
    });
  };
  connection.connect();
  return connection;
}
function getTables(connection) {
  return connection.queryPromise('show tables').then(({ results }) => {
    return results.map((item) => {
      return Object.values(item)[0];
    });
  });
}
function getTablesColumns(connection, tables) {
  return Promise.all(
    tables.map((item) => {
      return connection
        .queryPromise(`show full columns from ${item}`)
        .then(({ results }) => {
          const columns = results.map((item) => {
            return {
              key: item.Field,
              dataIndex: item.Field,
              valueType: castDBTypeToJsonType(item.Type),
              title: item.Comment,
            };
          });
          return columns;
        });
    }),
  );
}
async function main() {
  const connection = createConnection();
  const tables = await getTables(connection);
  const tablesColumns = await getTablesColumns(connection, tables);
  console.log(tablesColumns);
  connection.end();
}

main();
