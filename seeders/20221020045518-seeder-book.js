"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "Books", [{
                    title: "IoT Penerapan IR 4.0",
                    author: "Alkhairunas Riyuska",
                    image: "/uploads/image1.jpg",
                    published: new Date(),
                    price: 90,
                    stock: 100,
                    user: 1,
                    category: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "UI dan UX",
                    author: "Riyuska",
                    image: "/uploads/image2.png",
                    published: new Date(),
                    price: 90,
                    stock: 100,
                    user: 1,
                    category: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Product Manager",
                    author: "Riyuska",
                    image: "/uploads/image1.jpg",
                    published: new Date(),
                    price: 90,
                    stock: 100,
                    user: 1,
                    category: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Teknik A;goritma",
                    author: "Anas",
                    image: "/uploads/image3.png",
                    published: new Date(),
                    price: 90,
                    stock: 100,
                    user: 1,
                    category: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Instrumentasi",
                    author: "Alkhairunas riyuska, S.Si., M.Kom",
                    image: "/uploads/image2.png",
                    published: new Date(),
                    price: 90,
                    stock: 100,
                    user: 1,
                    category: 3,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ], {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Books", null, {});
    },
};