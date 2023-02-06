module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define(
      "Address",
      {
        address_id: {
          type: DataTypes.STRING,
          primaryKey: true,
        },
        // user_id: {
        //     type: DataTypes.STRING,
        // }
        zipcode: {
          type: DataTypes.STRING(8),
          allowNull: false,
        },
        state: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        city: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        district: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        street: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        number: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        complement: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      {
        tableName: "addresses",
        timestamps: false,
      }
    );
  
    return Address;
  };
  