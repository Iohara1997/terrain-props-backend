import sequelize from '../db.js';
import location_data from '../locationData.js';

async function createMapData (data) {
    await sequelize.sync();
    console.log('-------------------------');
    console.log(data);
    console.log('-------------------------');

    const newLocation = await location_data.create({
        latitude: String(data.lat),
        longitude: String(data.lon)
    })
}

export default { createMapData }