const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Mohamadhamdan13',
  database: 'träning'
});

connection.connect((err) => {
  if (err) {
    console.error('Kunde inte ansluta till MySQL-databasen:', err);
  } else {
    console.log('Ansluten till MySQL-databasen.');
  }
});

module.exports = connection;
