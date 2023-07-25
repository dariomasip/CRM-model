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
    state: {
      type: sequelize.DataTypes.INTEGER.UNSIGNED,
    },
    contact_schedule: {
      type: sequelize.DataTypes.JSON,
    },
    country: {
      type: sequelize.DataTypes.INTEGER.UNSIGNED,
    },
    province: {
      type: sequelize.DataTypes.INTEGER.UNSIGNED,
    },
    locality: {
      type: sequelize.DataTypes.STRING,
    },
    company: {
      type: sequelize.DataTypes.INTEGER.UNSIGNED,
    },
    current_assigned_user: {
      type: sequelize.DataTypes.INTEGER.UNSIGNED,
    },
    created_at: {
      type: sequelize.DataTypes.DATE,
      defaultValue: sequelize.literal(
        "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
      ),
    },
    updated_at: {
      type: sequelize.DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    deleted_at: {
      type: sequelize.DataTypes.DATE,
      defaultValue: null,
    },
  },
  { timestamps: false }
);

module.exports = Lead;
