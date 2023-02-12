module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      product_id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // category_id: {
      //   type: DataTypes.INTEGER,
      //   foreignKey: true,
      // },
      price: {
        type: DataTypes.FLOAT(5, 2),
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        allowNull: false,
      },
    },
    {
      tableName: "products",
      timestamps: false,
    }
  );

  Product.associate = (models) => {
    Product.belongsTo(models.Category, {
      foreignKey: "category_id",
      as: "category",
    });

    Product.belongsToMany(models.Order, {
      as: "orders",
      through: "OrderItens",
      foreignKey: "order_id",
      otherKey: "product_id",
       timestamps: false,
    });
  };

  return Product;
};
