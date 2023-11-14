"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  async up(queryInterface, Sequelize) {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable("FT_User", {
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
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("user");
  },
};
