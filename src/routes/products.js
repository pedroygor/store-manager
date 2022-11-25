const express = require('express');
const { productsController } = require('../controllers/index');
const validateIdInProducts = require('../middlewares/validateIdInProducts');

const validateNewProductsField = require('../middlewares/validateNewProductsField');

const router = express.Router();

router.get(
  '/',
  productsController.getAllProducts,
);

router.get(
  '/:id',
  productsController.getProductById,
);

router.post(
  '/',
  validateNewProductsField,
  productsController.insertProduct,
);

router.put(
  '/:id',
  validateNewProductsField,
  validateIdInProducts,
  productsController.updateProduct,
);

module.exports = router;
