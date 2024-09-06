"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const arr = [];
    const mockNames = ['Maks Gosling', 'Grisha Heisenberg', 'Anton Northon', 'Denis the Punisher']
    const mixedMockNames = []
    const salt = Math.floor(Math.random() * 10)
    const max = salt + mockNames.length 
    for(let i = salt; i < max; i+=1) mixedMockNames.push(mockNames[i % mockNames.length])

    for (let i = 1; i <= 4; i += 1) {
      arr.push({
        name: mixedMockNames[i % 4],
        email: `${i}@${i}`,
        password: bcrypt.hashSync(String(i), 10),
      });
  
    }
    queryInterface.bulkInsert("Users", arr);
    queryInterface.bulkInsert("Users", arr);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },

};
