'use strict';
module.exports = (sequelize, DataTypes) => {
  try{
    const User = sequelize.define('User', {
      username: DataTypes.STRING,
      email: {
        type:DataTypes.STRING,
        validate: {
          isEmail: true,
          isLowercase: true
        },
        allowNull: false
      },
      password:{
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {});
    User.associate = function(models) {
      // associations can be defined here
    };
    return User;
  }catch (e) {
    return e
  }
};