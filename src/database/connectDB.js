const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    })

try {
    sequelize.authenticate()
    console.log('Connection has been established successfully.');
}
catch (err) {
    throw new Error('Unable to connect to the database: Error => ', err);
};

// User Schema    
const UserSchema = require('../models/userSchema');
const User = UserSchema(sequelize, Sequelize, DataTypes);

// Game Schema 
//const GameSchema = require('../models/gameSchema');
//const Game = GameSchema(sequelize, Sequelize, DataTypes);

// Synchornize only for create new tables
sequelize.sync({ alter: true })
    .then(() => { console.log('Tables Users and Games synchronized to dababase'); })
    .catch(error => { conso.log(error); });


module.exports = { User }