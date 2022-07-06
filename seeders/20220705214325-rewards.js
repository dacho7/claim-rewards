"use strict";

const initialRewards = [
  {
    name: "Pagando 1 crédito",
    credits_require: 1,
  },
  {
    name: "Pagando 2 créditos",
    credits_require: 2,
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Rewards", initialRewards, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Rewards", null, {});
  },
};
