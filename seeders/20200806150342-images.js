"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("images", [
      {
        title: "m4",
        url:
          "https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2019/m-portaits-6/bmw-m4-coupe-yas-marina-blue-nick.f82m-ai-04.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "m3",
        url: "https://imgur.com/gallery/kyMKumV",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "m5",
        url: "https://i.imgur/.com/e6FMNLE.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "poweeeeer",
        url: "https://i.imgur/.com/e6FMNLE.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
