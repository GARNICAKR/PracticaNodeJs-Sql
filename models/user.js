'use strict';
module.exports = (sequelize, DataTypes) => {
  var User= sequelize.define('User',{
    name: DataTypes.TEXT,
    password:DataTypes.TEXT
  },{});
  return User;
};