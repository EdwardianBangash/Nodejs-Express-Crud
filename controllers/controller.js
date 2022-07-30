const con = require("../database/index");

exports.all = function (req, res) {
  var sql = `SELECT * FROM students`;
  con.query(sql, function (err, result) {
    if (result) {
      res.send(result);
    }
  });
};

exports.create = function (req, res) {
  var sql = `INSERT INTO students (name, age) VALUES ('${req.body.name}', '${req.body.age}')`;
  con.query(sql, function (err, result) {
    if (result) {
      return res.send("success=true");
    }
  });
};

exports.find = function (req, res) {
  var sql = `SELECT * FROM students where id='${req.query.id}'`;
  con.query(sql, function (err, result) {
    if (result) {
      res.send(result[0]);
    }
  });
};

exports.update = function (req, res) {
    var sql = `UPDATE students SET name='${req.body.name}', age='${req.body.age}' WHERE id='${req.body.id}'`;
    con.query(sql, function (err, result) {
      if (result) {
        return res.send("success=true");
      }
    });
  };

exports.delete = function (req, res) {
    var sql = `DELETE FROM students where id='${req.query.id}'`;
    con.query(sql, function (err, result) {
      if (result) {
        res.send("User Deleted Successfully");
      }
    });
  };