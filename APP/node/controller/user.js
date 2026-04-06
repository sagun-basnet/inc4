import { request } from "express";
import db from "../database/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const addUser = (req, res) => {
  //receving data from frontend
  const { name, phone, email, password, role } = req.body;
  const file = req.file;
  const filePath = `/images/${file.filename}`;

  try {
    const salt = bcrypt.genSaltSync(10);
    const encPassword = bcrypt.hashSync(password, salt);

    console.log(encPassword);

    //insert query for adding data to database
    const q = `insert into user(name, phone, email, password, role, profile) value(?,?,?,?, ?, ?)`;

    // query execution
    db.query(
      q,
      [name, phone, email, encPassword, role, filePath],
      (err, result) => {
        if (err) {
          console.log(err);
          return res.send("Error while excuting query", err);
        }

        res.send("Data inserted successfully", result);
      },
    );
  } catch (err) {
    console.log(err);
  }
};

// export const selectListWithUser = (req, res) => {
//   const { id } = req.params;

//   // const q = `select * from list l join user u on l.user_id = u.id `;
//   const q = `select * from list where user_id = ?`;
// };

export const selectUser = (req, res) => {
  try {
    const q = `select * from user `;

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

export const login = (req, res) => {
  const { email, password } = req.body;

  try {
    const q = `select * from user where email = ?`;

    db.query(q, [email], (err, result) => {
      if (err) return res.send("Error");
      if (result.length === 0) {
        return res.status(404).send("Invalid user");
      }

      const isCorrect = bcrypt.compareSync(password, result[0].password);

      if (isCorrect) {
        const token = jwt.sign(
          { id: result[0].id, email: result[0].email, role: result[0].role },
          process.env.JWT_SECRET || "secretkey",
        );
        const { password, ...others } = result[0];
        return res.send({
          message: "User login successfully",
          token,
          user: others,
        });
      }
      return res.send("Wrong password");
    });
  } catch (err) {
    console.log(err);
  }
};

export const uploadFile = (req, res) => {
  const image = req.file;
  const imagePath = `/images/${image.filename}`;
  const q = `insert into images(image) value(?)`;

  db.query(q, [imagePath], (err, result) => {
    if (err) return res.send("Error while executing query.", err);
    return res.send("User image updated successfully", result);
  });
};
