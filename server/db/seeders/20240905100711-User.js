'use strict';
const bcrypt = require('bcrypt')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const arr = []

    for(let i = 1; i <= 10; i+=1){
      arr.push({
        name: i,
        email: `${i}@${i}`,
        password: bcrypt.hashSync(String(i), 10),
      })
    }
    queryInterface.bulkInsert('Users', arr)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
