'use strict';
const { User } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const refTable = await User.findAll({ attributes: ['id'] });
    const ids = refTable.map(el => (el.dataValues.id))
    const arr = [];
    for(let i = 0; i < ids.length; i+=1){
      arr.push({
        UserId: ids[i],
        score: Math.floor(Math.random() * 100) * 100
      })
    }
    await queryInterface.bulkInsert('Ratings', arr)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Ratings', null, {});
  },
};
