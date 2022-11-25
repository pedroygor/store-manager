const { productsModel } = require('../models');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const productsById = await productsModel.getAllProductsById();

  if (!productsById.some(({ id: productId }) => productId === Number(id))) {
    return res.status(404).json({ message: 'Product not found' });
  }

  next();
};
