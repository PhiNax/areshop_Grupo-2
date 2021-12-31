// Call Games DataBase Table (MySQL)
const { Game } = require('../database/connectDB');

const controller = {
    // Index Show all games
    index: async (req, res) => {
        const game = await Game.findAll({});
        res.render('index', { game });
    },

    // Detail for one product
    detail: async (req, res) => {
        const gameId = req.params.id

        const game = await Game.findAll({
            where: {
                id: gameId
            }
        });

        res.render('products/productsDetails', { game });
    }
};

module.exports = controller;