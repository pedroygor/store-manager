const { salesServices } = require('../services/index');

const createSales = async (req, res) => {
  const { message } = await salesServices.insert(req.body);

  res.status(201).json(message);
};

module.exports = { createSales };
