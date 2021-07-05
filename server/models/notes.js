const Sequelize= require('sequelize');
const sequelize = require('../util/database');

var Notes = sequelize.define('notesModel', {
    id:{
        type : Sequelize.UUID,
        allowNull : false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey : true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull :false,
      unique : true
    },
    description: {
      type: Sequelize.STRING,
      allowNull :false
    },
    tag: {
        type: Sequelize.STRING,
        /*get() {
            return this.getDataValue('tag').split(' ')
        },
        set(val) {
           this.setDataValue('tag',val.join(' '));
        },*/
        allowNull : false
      },
    likes:{
      type: Sequelize.INTEGER,
      defaultValue: 0
      },
  }, {
    timestamps : true
  });

  module.exports = Notes;