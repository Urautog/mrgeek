// const crypto = require("crypto");
// const fs = require("fs");
// const path = require("path");
// const db = require("../database/db.json");

// const User = {
//   findOne: (email) => {
//     const user = db.users.find((user) => user.email === email);
//     return user;
//   },

//   create: (user) => {
//     const newUser = {
//       id: (user.id = crypto.randomUUID()),
//       name: user.name,
//       email: user.email,
//       password: user.hash,
//       tel: user.tel,
//       isAdmin: false,
//     };

//     db.users.push(newUser);
//     const dbJson = JSON.stringify(db, null, 2);
//     fs.writeFileSync(
//       path.resolve("src", "database", "db.json"),
//       dbJson,
//       "utf8"
//     );
//   },
// };

module.exports = (sequelize, DataType) => {
  const User = sequelize.define(
    "User",
    {
      user_id: {
        type: DataType.STRING,
        primaryKey: true,
      },
      name: {
        type: DataType.STRING,
        allowNull: false,
      },
      email: {
        type: DataType.STRING,
        allowNull: false,
      },
      password: {
        type: DataType.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "users",
      timestamps: false,
    }
  );

  return User;
};
