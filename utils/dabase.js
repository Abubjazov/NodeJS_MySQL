const Sequelize = require('sequelize')



const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER_NAME, process.env.DB_USER_PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.DB_DIALECT
})

module.exports = sequelize
