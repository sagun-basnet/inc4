import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "inc",
});

db.connect((err) => {
  if (err) {
    console.log("Error connecting database", err);
  } else {
    console.log("Database connected successfully.");
  }
});

export default db;
