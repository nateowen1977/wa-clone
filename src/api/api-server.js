import express from 'express';
import {setupRedis, redisClient} from './redis-client';
import cors from 'cors'
import bodyParser from 'body-parser';
import {setupRoutes} from './routes.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());
console.log('cors allowed for all routes');

const port = process.env.PORT || 4000;

setupRoutes(app);
setupRedis();

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
