import MapService from '../services/mapService.js';

async function createMapData (req, res, next) {
    const data = req.body;
    MapService.createMapData(data);
    res.status(200).send('Success!');
}

async function getMapData (req, res, next) {
    
    
    //return MapService.getMapData();
    res.end();
} 

export default {
    createMapData,
    getMapData
}