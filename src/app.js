import express from 'express';
import textRouter from './routes/textRoutes.js';

const app = express();

app.use(express.json());

app.use('/text', textRouter);

export default app;