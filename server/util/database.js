var Sequelize = require('sequelize');
var sequelize = new Sequelize('notesdb', 'root', '',{
    dialect: "mysql",
    host:"localhost"
});

module.exports = sequelize;