module.exports = (sequelize, DataTypes) => {
    const OrderItens = sequelize.define(
      "OrderItens",
      {
        order_itens_id: {
          type: DataTypes.STRING,
          primaryKey: true,
        },
        order_id: {
          type: DataTypes.STRING,
        },
        product_id: {
          type: DataTypes.STRING,
        },
      },
      {
        tableName: "order_itens",
        timestamps: false,
      }
    );

    return OrderItens
  };
  