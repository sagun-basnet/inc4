import db from "../database/db.js";

export const addUser = (req, res) => {
  //receving data from frontend
  const { name, phone, email, password, role } = req.body;

  try {
    //insert query for adding data to database
    const q = `insert into user(name, phone, email, password, role) value(?,?,?,?, ?)`;

    // query execution
    db.query(q, [name, phone, email, password, role], (err, result) => {
      if (err) {
        console.log(err);
        return res.send("Error while excuting query", err);
      }

      res.send("Data inserted successfully", result);
    });
  } catch (err) {
    console.log(err);
  }
};

export const selectUser = (req, res) => {
  try {
    const q = `select * from user`;

    db.query(q, (err, result) => {
      if (err)
        return res
          .status(500)
          .send({ message: "Error while executing query", status: 0 });

      return res
        .status(200)
        .send({ message: "Data retrive from database", status: 1, result });
    });
  } catch (err) {
    console.log(err);
  }
};
export const selectSingleUser = (req, res) => {
  const { id } = req.params;
  try {
    const q = `select * from user where id = ?`;

    db.query(q, [id], (err, result) => {
      if (err)
        return res
          .status(500)
          .send({ message: "Error while executing query", status: 0 });

      return res
        .status(200)
        .send({ message: "Data retrive from database", status: 1, result });
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  const q = `delete from user where id = ?`;

  try {
    db.query(q, [id], (err, result) => {
      if (err) return res.send("Error while executing query.", err);
      return res.send("User deleted successfully", result);
    });
  } catch (err) {
    console.log(err);
  }
};

export const editUser = (req, res) => {
  const { id } = req.params;
  const { name, phone, email, password } = req.body;
  const q = `update user set name=?, phone=?, email=?, password=? where id = ?`;

  try {
    db.query(q, [name, phone, email, password, id], (err, result) => {
      if (err) return res.send("Error while executing query.", err);
      return res.send("User updated successfully", result);
    });
  } catch (err) {
    console.log(err);
  }
};
