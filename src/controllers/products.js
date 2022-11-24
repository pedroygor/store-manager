const { productsServices } = require('../services/index');
// const errorMap = require('../utils/errorMap');

const getAllProducts = async (_req, res) => {
  const { message } = await productsServices.findAll();

  res.status(200).json(message);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsServices.findById(Number(id));

  if (type) return res.status(404).json({ message });

  res.status(200).json(...message);
};

const insertProduct = async (req, res) => {
  const { name } = req.body;
  const { message } = await productsServices.insert(name);

  res.status(201).json(...message);
};

module.exports = { getAllProducts, getProductById, insertProduct };
