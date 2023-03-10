const productsServices = require('../services/products');

const getAllProducts = async (_req, res) => {
  const { message } = await productsServices.findAll();

  res.status(200).json(message);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsServices.findById(Number(id));

  if (type) return res.status(404).json({ message });

  res.status(200).json(message);
};

const insertProduct = async (req, res) => {
  const { name } = req.body;
  const { message } = await productsServices.insert(name);

  res.status(201).json(...message);
};

const updateProduct = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  const { message } = await productsServices.update(id, name);

  res.status(200).json(message);
};

const deleteProductById = async (req, res) => {
  const { id } = req.params;
  await productsServices.deleteProductById(id);
 return res.status(204).json();
};

module.exports = {
  getAllProducts,
  getProductById,
  insertProduct,
  updateProduct,
  deleteProductById,
};
