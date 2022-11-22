const { modelProducts } = require('../models/index');

const findAll = async () => {
  const products = await modelProducts.findAll();

  return { type: null, message: products };
};

const findById = async (productId) => {
  const product = await modelProducts.findById(productId);

  if (product.length > 0) {
    return { type: null, message: product };
  }

  return { type: 404, message: 'Product not found' };
};

module.exports = { findAll, findById };
