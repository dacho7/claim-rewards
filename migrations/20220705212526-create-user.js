"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      username: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      credits: {
        type: Sequelize.INTEGER,
      },
      date_reward: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
