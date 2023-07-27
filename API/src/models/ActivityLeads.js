const sequelize = require("sequelize");
const database = require("../config/database");

const ActivityLeads = database.define(
  "activity_leads",
  {
    id: {
      type: sequelize.DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    lead_id: {
      type: sequelize.DataTypes.INTEGER.UNSIGNED,
    },
    user_id: {
      type: sequelize.DataTypes.INTEGER.UNSIGNED,
    },
    type_id: {
      type: sequelize.INTEGER.UNSIGNED,
    },
    date: {
      type: sequelize.DataTypes.DATE,
    },
    description: {
      type: sequelize.DataTypes.STRING,
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

module.exports = ActivityLeads;
