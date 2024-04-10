const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'your_database_name'
});


connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }

  console.log('Connected to MySQL as id ' + connection.threadId);
});


const usersData = [
  { username: 'chrispandalover', email: 'cv10302003@gmail.com', password: 'pandasarecool123' },
  { username: 'thedragonwarrior', email: 'jackblack@gmail.com', password: 'skadoosh634_' },
  { username: 'wwf', email: 'worldwildlifefun@gmail.com', password: 'welovepandas783' },
  { username: 'pandasinternational1', email: 'pandasinternational@gmail.com', password: 'justiceforpandas01!' },
  { username: 'giantpandanumber1fan', email: 'johnsmith10@gmail.com', password: 'pandasareawesome10' }
];

const insertUsers = () => {
  const sql = 'INSERT INTO users (username, email, password) VALUES ?';
  const values = usersData.map(user => [user.username, user.email, user.password]);

  connection.query(sql, [values], (err, result) => {
    if (err) throw err;
    console.log('Number of records inserted: ' + result.affectedRows);
  
    connection.end();
  });
};

insertUsers();