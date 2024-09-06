"use strict";
const { Question } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const refTable = await Question.findAll({ attributes: ["id"] });
    const ref = refTable.map((el) => el.get());
    const arr = [];

    for (let i = 0; i < ref.length; i += 1) {
      for (let j = 1; j <= 4; j += 1) {
        arr.push({
          QuestionId: ref[i].id,
          content: `${!(j % 4) ? "правильный" : "нерпавильный"} ответ №${j}`,
          trueness: !(j % 4),
        });
        console.log("up > ref[i].id >", ref[i].id);
      }
    }
    await queryInterface.bulkInsert("Answers", arr);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Answers", null, {});
  },
};
