const express = require('express');
const router = express.Router();
const catalogController = require('../controllers/catalogController');

router.get('/flowers', catalogController.getFlowers);
router.post('/flowers', catalogController.createFlower);
router.put('/flowers/:id', catalogController.updateFlower);
router.delete('/flowers/:id', catalogController.deleteFlower);

module.exports = router;