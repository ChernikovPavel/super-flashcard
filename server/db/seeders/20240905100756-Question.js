'use strict';
const { Topic } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const refTable = await Topic.findAll({ attributes: ['id', 'title'] });
    const ref = refTable.map((el) => el.get());
    const arr = [];

    for (let i = 0; i < ref.length; i += 1) {
      for (let j = 100; j <= 500; j += 100) {
        arr.push({
          TopicId: ref[i].id,
          content: `вопрос для топика "${ref[i].title}" стоимостью ${j}`,
          score: j,
        });
      }
    }

    queryInterface.bulkInsert('Questions', arr);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
