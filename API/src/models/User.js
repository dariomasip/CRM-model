const sequelize = require("sequelize");
const database = require("../config/database");

const User = database.define(
  "users",
  {
    id: {
      type: sequelize.DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: sequelize.DataTypes.STRING,
    },
    email: {
      type: sequelize.DataTypes.STRING,
    },
    password: {
      type: sequelize.DataTypes.STRING,
    },
    role_id: {
      type: sequelize.DataTypes.INTEGER.UNSIGNED,
    },
    state_id: {
      type: sequelize.DataTypes.INTEGER.UNSIGNED,
    },
    created_at: {
      type: sequelize.DataTypes.DATE,
    },
    updated_at: {
      type: sequelize.DataTypes.DATE,
      defaultValue: null,
    },
  },
  { timestamps: false }
);

module.exports = User;
