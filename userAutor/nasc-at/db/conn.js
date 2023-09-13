const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('userautor','root', '3709', {
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql'
})


module.exports = sequelize