"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  return app.model.define("FT_User", {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    user_id: {
      type: STRING(255),
      allowNull: false,
      defaultValue: "",
    },
    created_at: DATE,
    updated_at: DATE,
  });
};
