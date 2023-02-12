module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      order_id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      status: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "orders",
      timestamps: false,
    }
  );

  Order.associate = (models) => {
    Order.belongsToMany(models.Product, {
      as: "products",
      foreignKey: "product_id",
      otherKey: "order_id",
      through: "OrderItens",
    });

    Order.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
    });
  };

  return Order;
};

