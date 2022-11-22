const { serviceProducts } = require('../services/index');
// const errorMap = require('../utils/errorMap');

const getAllProducts = async (_req, res) => {
  const { message } = await serviceProducts.findAll();

  res.status(200).json(message);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await serviceProducts.findById(Number(id));

  if (type) return res.status(404).json({ message });

  res.status(200).json(...message);
};

module.exports = { getAllProducts, getProductById };
