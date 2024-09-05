'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {

    static associate({Question}) {
      this.belongsTo(Question)
    }
  }
  Answer.init({
    QuestionId: DataTypes.INTEGER,
    content: DataTypes.STRING,
    trueness: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Answer',
  });
  return Answer;
};