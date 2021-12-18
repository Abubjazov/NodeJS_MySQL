const Sequelize = require('sequelize')
const sequelize = require('../utils/dabase')

const todo = sequelize.define('Todo', {
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    done: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = todo
