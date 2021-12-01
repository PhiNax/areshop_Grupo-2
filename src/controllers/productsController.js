const { Game } = require('../database/connectDB');
const { GameCategory } = require('../database/connectDB');

const controller = {

    // Detail - Detail from one product
    detail: async (req, res) => {
        const gameId = req.params.id

        try {
            const game = await Game.findOne({
                include: [GameCategory],
                where: {
                    id: gameId
                }
            });
            res.render('products/productsDetail', { game });
        }
        catch (err) {
            throw new Error('List detail game: failed => ' + err);
        }
    },
};

module.exports = controller;