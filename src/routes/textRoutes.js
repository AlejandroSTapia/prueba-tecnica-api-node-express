import express from 'express';
import textController from '../controllers/textController.js';

const router = express.Router();

router.post("/process", textController.processText);

router.post('/transform', textController.transformText);

export default router;