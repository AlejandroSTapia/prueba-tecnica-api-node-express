import express from 'express';
import textController from '../controllers/textController.js';

const router = express.Router();

/**
 * @openapi
 * /text/process:
 *   post:
 *     summary: Procesa texto entre paréntesis
 *     description: Invierte los grupos entre paréntesis comenzando por los más internos.
 *     tags:
 *       - Text
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - text
 *             properties:
 *               text:
 *                 type: string
 *                 example: "(Hola (Mundo))"
 *     responses:
 *       200:
 *         description: Texto procesado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: array
 *                   items:
 *                     type: string
 *             example:
 *               result:
 *                 - "(Hola (Mundo))"
 *                 - "(Hola odnuM)"
 *                 - "Mundo aloH"
 *       400:
 *         description: Texto inválido o paréntesis desbalanceados
 */
router.post('/process', textController.processText);

/**
 * @openapi
 * /text/transform:
 *   post:
 *     summary: Transforma una cadena de texto
 *     description: Aplica capitalización alternada, reemplazo de vocales y detección de palabras únicas.
 *     tags:
 *       - Text
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - text
 *             properties:
 *               text:
 *                 type: string
 *                 example: "Hello world! This is a test. Hello again."
 *     responses:
 *       200:
 *         description: Transformaciones realizadas correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 alternating_caps:
 *                   type: string
 *                 vowel_replacement:
 *                   type: string
 *                 unique_words:
 *                   type: array
 *                   items:
 *                     type: string
 *             example:
 *               alternating_caps: "HeLlO WoRlD! ThIs Is A TeSt. HeLlO AgAiN."
 *               vowel_replacement: "Hillu wurld! Thos os e tist. Hillu egeon."
 *               unique_words:
 *                 - "world"
 *                 - "This"
 *                 - "is"
 *                 - "a"
 *                 - "test"
 *                 - "again"
 *       400:
 *         description: Texto inválido
 */
router.post('/transform', textController.transformText);

export default router;