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

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      user_id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tel: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
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
