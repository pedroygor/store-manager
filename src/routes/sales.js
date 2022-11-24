const express = require('express');
const { salesController } = require('../controllers/index');

const validateNewSales = require('../middlewares/validateNewSales');
const validateProductId = require('../middlewares/validateProductId');

const router = express.Router();

router.post(
  '/',
  validateNewSales,
  validateProductId,
  salesController.createSales,
);

module.exports = router;
