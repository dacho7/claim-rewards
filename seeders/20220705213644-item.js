"use strict";

const initialItems = [
  {
    id_reward: 1,
    description: "Manzana",
    percentage: 80,
  },
  {
    id_reward: 1,
    description: "Pera",
    percentage: 20,
  },
  {
    id_reward: 2,
    description: "Piña",
    percentage: 60,
  },
  {
    id_reward: 2,
    description: "Naranja",
    percentage: 30,
  },
  {
    id_reward: 2,
    description: "Sandia",
    percentage: 10,
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Items", initialItems, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Items", null, {});
  },
};
