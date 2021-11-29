import express from 'express';
import router from './routes/map.routes.js';
import cors from 'cors';
import database from './db.js';
import location_data from './locationData.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/', router);

global.port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server up! Listening on port ${port}.`);
});
