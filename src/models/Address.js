module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define(
    "Address",
    {
      address_id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
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

  // Address.associate = (models) => {
  //   Address.belongsTo(models.User, {
  //     foreignKey: "user_id",
  //     as: "user",
  //   });
  // };

  return Address;
};
