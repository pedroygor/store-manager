const { salesServices } = require('../services/index');

const createSales = async (req, res) => {
  const { message } = await salesServices.insert(req.body);

  res.status(201).json(message);
};

const getAllSales = async (_req, res) => {
  const { message } = await salesServices.findAll();

  res.status(200).json(message);
};

const getSalesById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesServices.findById(Number(id));
  if (type) {
    return res.status(404).json({ message });
  }

  res.status(200).json(message);
};

module.exports = { createSales, getAllSales, getSalesById };
