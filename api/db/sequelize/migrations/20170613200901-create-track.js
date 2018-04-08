/*eslint-env node*/
'use strict'

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Tracks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      scheduleId: {
        references: {
          model: 'Schedules',
          key: 'id'
        },
        type: Sequelize.INTEGER,
        allowNull: false
      },
      conferenceId: {
        references: {
          model: 'Conferences',
          key: 'id'
        },
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: function(queryInterface) {
    return queryInterface.dropTable('Tracks')
  }
}
