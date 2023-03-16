module.exports = {
    async up (queryInterface, Sequelize) {
    await queryInterface.createTable('address', {
        address_id: {
            type: Sequelize.STRING,
            primaryKey: true,
        },
        zipcode: {
            type: Sequelize.STRING(8),
            allowNull: false,
        },
        state: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        city: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        district: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        street: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        number: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        complement: {
            type: Sequelize.STRING,
            allowNull: true,
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
    await queryInterface.dropTable('address');
}
};
