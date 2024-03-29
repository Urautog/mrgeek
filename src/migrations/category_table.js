module.exports = {
    async up (queryInterface, Sequelize) {
    await queryInterface.createTable('category', {
        address_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING,
            unique: true,
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
    