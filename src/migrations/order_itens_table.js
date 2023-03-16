module.exports = {
    async up (queryInterface, Sequelize) {
    await queryInterface.createTable('order_itens', {
        order_itens_id: {
            type: Sequelize.STRING,
            primaryKey: true,
        },
        order_id: {
            type: Sequelize.STRING,
        },
        product_id: {
            type: Sequelize.STRING,
        },
        created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now')
        },
        updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now')
        }
    })
},

async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('order_itens');
}
};
