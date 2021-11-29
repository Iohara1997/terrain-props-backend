import Sequelize from 'sequelize';
import database from './db.js';

const location_data = database.define('location_data', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    latitude: {
        type: Sequelize.STRING(45),
        allowNull: false,
    },
    longitude: {
        type: Sequelize.STRING(45),
        allowNull: false,
    }
})

export default location_data;