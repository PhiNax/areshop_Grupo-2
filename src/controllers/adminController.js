const { Game } = require('../database/connectDB');

const controller = {

    // Show all games
    list: async (req, res) => {
        try {
            const game = await Game.findAll({});
            res.render('admin/gamesList', { game });
        }
        catch (err) {
            throw new Error('Admin: List all games: failed => ' + err);
        }
    },
    // Create - Form to create view
    create: (req, res) => {
        res.render('admin/gameCreate');
    },
    // Create Method to store in DataBase
    store: async (req, res) => {
        // newGame catch data from request form to store in DataBase
        const newGame = {
            name: req.body.name,
            description: req.body.description,
            coverImage: req.file.filename,
            rating: req.body.rating,
            price: req.body.price
        };
        try {
            await Game.create(newGame)
            // Render to the new game created page by ID
            res.render('products/productsDetail', { game: newGame });
        }
        catch (err) {
            throw new Error('Admin: Create New Game Failed => ' + err);
        }
    },
    // Edit view - Form to edit game
    getEdit: async (req, res) => {
        const id = req.params.id;
        try {
            const game = await Game.findOne({
                where: {
                    id: id
                }
            });

            res.render('admin/gameEdit', { game });
        }
        catch (err) {
            throw new Error('Admin: Find Game By Id Error => ' + err);
        }
    },
    // Update - Form to edit
    edit: async (req, res) => {
        const id = req.params.id;

        // updateGame catch data from game edit form
        const updateGame = {
            name: req.body.name,
            description: req.body.description,
            //coverImage: req.file.filename,
            rating: req.body.rating,
            price: req.body.price
        };
        try {
            await Game.update({
                name: updateGame.name,
                description: updateGame.description,
                //coverImage: updateGame.coverImage,
                rating: updateGame.rating,
                price: updateGame.price
            }, {
                where: {
                    id: id
                }
            });
            // TODO: Render created Product by ID
            res.redirect('/admin');
        }
        catch (err) {
            throw new Error('Admin: Update New Game on DB Error => ' + err);
        }
    },
    // Delete - Delete one product from DB
    delete: async (req, res) => {
        const id = req.params.id;

        try {
            await Game.destroy({
                where: {
                    id: id
                }
            })

            res.redirect('/admin');
        }
        catch (err) {
            throw new Error('Admin: Delete Game on DB Error => ' + err);
        }
    }
}

module.exports = controller;