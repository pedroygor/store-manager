const express = require('express');
const { controllerProducts } = require('../controllers/index');

const validateNewProductsField = require('../middlewares/validateNewProductsField');

const router = express.Router();

router.get(
  '/',
  controllerProducts.getAllProducts,
);

router.get(
  '/:id',
  controllerProducts.getProductById,
);

router.post(
  '/',
  validateNewProductsField,
  controllerProducts.insertProduct,
);

module.exports = router;
