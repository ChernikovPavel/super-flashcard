'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const mockTopics = [
      'Кино',
      'Спорт',
      'Музыка',
      'Наука',
      'Жизнь'
    ]

    const arr = [];
    for(let i = 0; i < mockTopics.length; i+=1){
      arr.push({
        title: mockTopics[i]
      })
    }
    await queryInterface.bulkInsert('Topics', arr)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Topics', null, {});
  }
};
