// Call Games DataBase Table (MySQL)
const { Game } = require('../database/connectDB');

const controller = {
    // Index Show all games
    index: async (req, res) => {
        try {
            const gamePc = await Game.findAll({
                where: {
                    gameplatformId: 1
                }
            });

            const gamePs4 = await Game.findAll({
                where: {
                    gameplatformId: 2
                }
            });

            const gamePs5 = await Game.findAll({
                where: {
                    gameplatformId: 3
                }
            });

            res.render('index', { gamePc, gamePs4, gamePs5 });
        }
        catch (err) {
            throw new Error('List games for index: failed => ' + err);
        }
    }
};

module.exports = controller;