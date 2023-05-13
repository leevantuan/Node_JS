const { Sequelize } = require('sequelize');
// const mysql = require('mysql2');


// // Option 1: Passing a connection URI
// const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// // Option 2: Passing parameters separately (sqlite)
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: 'path/to/database.sqlite'
// });

// Option 3: Passing parameters separately (other dialects)

// truyền tên DB user pass
const sequelize = new Sequelize('chap_one', 'root', null, {
    host: 'localhost',
    dialect:
        'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
    logging: false,
    // tắt select 1+1
});

//sử dụng bất đồng bộ
//async
let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};


// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'chap_one'
// });

// connection.execute(
//     'SELECT * FROM `User` ',
//     ['Rick C-137', 53],
//     function (err, results, fields) {
//         console.log(results); // results contains rows returned by server

//     }
// );


module.exports = connectDB;
