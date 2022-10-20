'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DetailTransactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      transaction: {
        type: Sequelize.STRING
      },
      suer: {
        type: Sequelize.INTEGER
      },
      book: {
        type: Sequelize.INTEGER
      },
      tittleBook: {
        type: Sequelize.STRING
      },
      imageBook: {
        type: Sequelize.STRING
      },
      priceBook: {
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('DetailTransactions');
  }
};