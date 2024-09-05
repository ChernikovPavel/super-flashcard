"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const arr = [
      {
        email: "",
        password: "",
      },
    ];
    await queryInterface.bulkInsert("Users", arr);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
