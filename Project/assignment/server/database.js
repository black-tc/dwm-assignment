const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(express.json());
app.use(cors());


const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "WIL",
  port: "3306",
});



//GET all students
app.route("/api/students").get((req, res) => {
  pool.query(`SELECT * FROM mytable`, (err, result) => {
    if (err) throw err;
    res.json(result);
    console.log("All students transferred to Front-End.");
  });
});

app.route("/api/employed").get((req, res) => {
  pool.query(`SELECT * FROM mytable`, (err, result) => {
    if (err) throw err;
    res.json(result);
    console.log("All students transferred to Front-End.");
  });
});

app.route("/api/indicators").get((req, res) => {
  pool.query(`SELECT * FROM mytable  WHERE Employment = 'Employed'`, (err, result) => {
    if (err) throw err;
    res.json(result);
    console.log("All Indicators transferred to Frond-End");
  });
});

app.route("/api/males").get((req, res) => {
  pool.query(`SELECT * FROM mytable  WHERE Gender = 'Male'`, (err, result) => {
    if (err) throw err;
    res.json(result);
    console.log("All Males transferred to Frond-End");
  });
});

app.route("/api/females").get((req, res) => {
  pool.query(`SELECT * FROM mytable  WHERE Gender = 'Female'`, (err, result) => {
    if (err) throw err;
    res.json(result);
    console.log("All Females transferred to Frond-End");
  });
});

app.route("/api/nust").get((req, res) => {
  pool.query(`SELECT * FROM mytable  WHERE University = 'Namibia University of Science and Technology'`, (err, result) => {
    if (err) throw err;
    res.json(result);
    console.log("All Nust transferred to Frond-End");
  });
});

app.route("/api/ium").get((req, res) => {
  pool.query(`SELECT * FROM mytable  WHERE University = 'International University of Management'`, (err, result) => {
    if (err) throw err;
    res.json(result);
    console.log("All IUM transferred to Frond-End");
  });
});

app.route("/api/part-time").get((req, res) => {
  pool.query(`SELECT * FROM mytable  WHERE Mode_of_Study = 'Part time'`, (err, result) => {
    if (err) throw err;
    res.json(result);
    console.log("All Part Time transferred to Frond-End");
  });
});

app.route("/api/full-time").get((req, res) => {
  pool.query(`SELECT * FROM mytable  WHERE Mode_of_Study = 'Full time'`, (err, result) => {
    if (err) throw err;
    res.json(result);
    console.log("All Full Time transferred to Frond-End");
  });
});

app.route("/api/distance").get((req, res) => {
  pool.query(`SELECT * FROM mytable  WHERE Mode_of_Study = 'Distance'`, (err, result) => {
    if (err) throw err;
    res.json(result);
    console.log("All Full Time transferred to Frond-End");
  });
});

/*~~~~~~~~~~~~~~~~~~~~~*/
/* QUERIES ~~~~~~~~~~~~*/

/*Listening ~~~~~~~~~~~*/
app.listen(8000, () => {
  console.log("Server now listens at port: 8000.");
});
