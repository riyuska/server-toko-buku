"use strict";
const bcrpt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const password = bcrpt.hashSync("rahasia", 10);
        await queryInterface.bulkInsert(
            "Users", [{
                    id: 1,
                    name: "Alkhairunas Riyuska",
                    email: "anas@gmail.com",
                    password: password,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 2,
                    name: "Admin",
                    email: "admin@gmail.com",
                    password: password,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ], {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Users", null, {});
    },
};