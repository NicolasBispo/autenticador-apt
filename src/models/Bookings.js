const {Sequelize, DataTypes} = require('sequelize');

const database = require('./Database');

const Bookings = database.define('bookings', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    bookingName:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    bookingEntryDate:{
        type: DataTypes.DATE,
        allowNull: false
    },
    bookingLeftDate:{
        type: DataTypes.DATE,
        allowNull: false
    },
    people:{
        type: DataTypes.JSON,
        allowNull: false
    }
},{
    timestamps: false
})

module.exports = Bookings;