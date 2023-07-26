const sequelize = require("sequelize");
const database = require("../config/database");

const Lead = database.define(
  "leads",
  {
    id_lead: {
      type: sequelize.DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: sequelize.DataTypes.STRING,
    },
    state_id: {
      type: sequelize.DataTypes.INTEGER.UNSIGNED,
    },
    contact_schedule: {
      type: sequelize.DataTypes.JSON,
    },
    country_id: {
      type: sequelize.DataTypes.INTEGER.UNSIGNED,
    },
    province: {
      type: sequelize.DataTypes.INTEGER.UNSIGNED,
    },
    locality: {
      type: sequelize.DataTypes.STRING,
    },
    company_id: {
      type: sequelize.DataTypes.INTEGER.UNSIGNED,
    },
    agent_id: {
      type: sequelize.DataTypes.INTEGER.UNSIGNED,
    },
    created_at: {
      type: sequelize.DataTypes.DATE,
    },
    updated_at: {
      type: sequelize.DataTypes.DATE,
      defaultValue: null,
    },
    deleted_at: {
      type: sequelize.DataTypes.DATE,
      defaultValue: null,
    },
  },
  { timestamps: false }
);

module.exports = Lead;
