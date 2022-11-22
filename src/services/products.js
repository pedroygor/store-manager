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

const insert = async (name) => {
  const productId = await modelProducts.insert({ name });
  const newProduct = await modelProducts.findById(productId);

  return { type: null, message: newProduct };
};

module.exports = { findAll, findById, insert };
