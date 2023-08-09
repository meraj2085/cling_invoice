const express = require('express');
const router = express.Router();

// Import controller
const addSticker = require('../controllers/stickers/addSticker');
const massUpload = require('../controllers/stickers/massUpload');
const massUpdate = require('../controllers/stickers/massUpdate');
const { generateSticker } = require('../controllers/stickers/generateStickers');

// Routes

/**
 * @openapi
 * /api/v1/stickers/addSticker:
 *   post:
 *     summary: Add Sticker
 *     description: Add a sticker.
 *     tags: [Stickers]
 *     x-express-openapi-additional-middleware:
 *       - type: body
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               distributor_id:
 *                 type: string
 *                 description: ID of the distributor.
 *               status:
 *                 type: string
 *                 description: Status of the sticker.
 *     responses:
 *       200:
 *         description: Sticker Object
 */
router.post('/addSticker', addSticker);

/**
 * @openapi
 * /api/v1/stickers/massUpload:
 *   post:
 *     summary: Add Multiple Stickers
 *     description: Add many user stickers.
 *     tags: [Stickers]
 *     x-express-openapi-additional-middleware:
 *       - type: body
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               stickers:
 *                 type: string
 *                 format: binary
 *                 description: The XLSX file containing stickers data.
 *     responses:
 *       200:
 *         description: Stickers Object
 */

router.post('/massUpload', massUpload);

/**
 * @openapi
 * /api/v1/stickers/massUpdate:
 *   patch:
 *     summary: Update Multiple Stickers
 *     description: Update multiple user stickers.
 *     tags: [Stickers]
 *     x-express-openapi-additional-middleware:
 *       - type: body
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               stickers:
 *                 type: string
 *                 format: binary
 *                 description: The XLSX file containing stickers data.
 *     responses:
 *       200:
 *         description: Stickers Object
 */

router.patch('/massUpdate', massUpdate);

router.get('/generate', generateSticker);

module.exports = router;