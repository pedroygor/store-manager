const express = require('express');
const { controllerProducts } = require('../controllers/index');

const router = express.Router();

router.get(
  '/',
  controllerProducts.getAllProducts,
);

router.get(
  '/:id',
  controllerProducts.getProductById,
);

module.exports = router;
