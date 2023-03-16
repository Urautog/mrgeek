module.exports = {
    async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
        id: {
            order_id: {
                type: Sequelize.STRING,
                primaryKey: true,
            },
            status: {
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
            }
        })
    },
    
    async down (queryInterface, Sequelize) {
        await queryInterface.dropTable('orders');
    }
    };