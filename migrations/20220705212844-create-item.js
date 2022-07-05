"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Items", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_reward: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.STRING,
      },
      percentage: {
        type: Sequelize.REAL,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Items");
  },
};
