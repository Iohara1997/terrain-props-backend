import express from 'express';
// import MapController from '../controllers/map.controller.js';

const router = express.Router();
router.post('/map', handlePost);

function handlePost(req, res, next) {
    const data = req.body;
    console.log(data);
    res.send('tudo OK!');
}

export default router;