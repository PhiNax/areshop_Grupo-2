module.exports = (sequelize, Sequelize, DataTypes) => {
    return sequelize.define('user', {

        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nickname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        avatar: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'avatar.png'
        },
        access: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        }
    })
}