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
const User = UserSchema(sequelize, DataTypes);

// Game Schema 
const GameSchema = require('../models/gameSchema');
const Game = GameSchema(sequelize, DataTypes);

const GameCategorySchema = require('../models/gameCategorySchema');
const GameCategory = GameCategorySchema(sequelize, DataTypes);

const GamePlatformSchema = require('../models/GamePlatformSchema');
const GamePlatform = GamePlatformSchema(sequelize, DataTypes);


// Relationship Schema
// Games have one Category and Category have multiple games
GameCategory.hasMany(Game);
Game.belongsTo(GameCategory);

GamePlatform.hasMany(Game);
Game.belongsTo(GamePlatform);


// Synchornize only for create new tables
try {
    sequelize.sync();
    console.log('Tables Users and Games synchronized to dababase');
}
catch (err) {
    throw new Error('Unable to sync tables: Error => ', err);
}


module.exports = { User, Game, GameCategory, GamePlatform }