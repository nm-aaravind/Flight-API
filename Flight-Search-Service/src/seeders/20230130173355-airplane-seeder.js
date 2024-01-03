'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert("Airplanes", [{
      modelName: "Airbus A330",
      capacity: 300,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      modelName:"Airbus A320",
      capacity:300,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      modelName:"Boeing 777",
      capacity:300,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      modelName:"Boeing 747",
      capacity:300,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      modelName:"Airbus Beluga",
      capacity:500,
      createdAt:new Date(),
      updatedAt:new Date()
    }], {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
