'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {

    static associate({Topic, Answer}) {
      this.belongsTo(Topic)
      this.hasMany(Answer)
    }
  }
  Question.init({
    TopicId: DataTypes.INTEGER,
    content: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};