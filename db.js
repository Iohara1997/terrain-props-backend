import Sequelize from 'sequelize';

const sequelize = new Sequelize('map_data', 'root', 'SenhaForte123%', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
});


export default sequelize;