const Sequelize  = require("sequelize")
const connection = require("./database")

const Games = connection.define("games",{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    price:{
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    year:{
        type: Sequelize.INTEGER,
        allowNull: true,
    }
})
//Games.sync({force: true})

module.exports = Games