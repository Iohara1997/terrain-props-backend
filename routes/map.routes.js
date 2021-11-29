import express from 'express';
import MapController from '../controllers/mapController.js';

const router = express.Router();
router.post('/map', MapController.createMapData);
router.get('/map', MapController.getMapData);

// function handlePost(req, res, next) {
    // const data = req.body;
    // console.log(data);
    // res.send('tudo OK!');
// }

export default router;