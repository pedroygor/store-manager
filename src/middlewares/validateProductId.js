const { productsModel } = require('../models');

module.exports = async (req, res, next) => {
  const sales = req.body;
  let isValidId = true;
  const productsById = await productsModel.getAllProductsById();

  sales.forEach((element) => {
    if (!productsById.some(({ id }) => id === element.productId)) isValidId = false;
  });

  if (!isValidId) {
    return res.status(404).json({ message: 'Product not found' });
  }

  next();
};
