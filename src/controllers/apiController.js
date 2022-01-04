const { User } = require('../database/connectDB');

const controller = {

    // Show all games
    users: async (req, res) => {
        try {
            const dataUser = await User.findAll({});

            const count = { count: dataUser.length };

            const user = { user: dataUser };

            const data = [count, user];

            res.send(data);
        }
        catch (err) {
            throw new Error('API: List users: failed => ' + err);
        }
    },
}

module.exports = controller;