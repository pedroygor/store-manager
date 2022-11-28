const productsModel = require('../models/products');

const findAll = async () => {
  const products = await productsModel.findAll();

  return { type: null, message: products };
};

const findById = async (productId) => {
  const product = await productsModel.findById(productId);

  if (product.length > 0) {
    return { type: null, message: product[0] };
  }

  return { type: 404, message: 'Product not found' };
};

const insert = async (name) => {
  const productId = await productsModel.insert({ name });
  const newProduct = await productsModel.findById(productId);

  return { type: null, message: newProduct };
};

const update = async (id, name) => {
  await productsModel.update(id, name);

  return { type: null, message: { id, name } };
};

const deleteProductById = async (id) => {
  await productsModel.deleteProductById(id);

  return { type: null, message: '' };
};

module.exports = { findAll, findById, insert, update, deleteProductById };
