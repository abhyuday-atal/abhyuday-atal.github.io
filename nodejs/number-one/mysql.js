var mysql = require('mysql');
var conString = {
  host: 'localhost',
  user: 'root',
  password: 'mysqlmysql'
};
var con = mysql.createConnection(conString);
// console.log(con);

con.connect(onConnnectionSuccess);

function onConnnectionSuccess(err) {
  if (err) throw err;
  con.query('SELECT name, science, maths FROM school.marks where id = 2', onQueryExecutionSuccess);
}

function onQueryExecutionSuccess(err, result, fields) {
  if (err) throw err;
  // console.log("fields: " + JSON.stringify(fields));
  console.log(JSON.parse(JSON.stringify(result)));
}