"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({Rating}) {
      this.hasMany(Rating)
    }
  }
  User.init(
    {
      email: DataTypes.STRING(32),
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
