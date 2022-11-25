const { salesModel, salesProductModel } = require('../models/index');

const insert = async (sales) => {
  const salesId = await salesModel.insert();
  const productSales = await salesProductModel.insert(sales, salesId);

  return { type: null, message: { id: salesId, itemsSold: productSales } };
};

const findAll = async () => {
  const allSales = await salesModel.findAll();

  return { type: null, message: allSales };
};

const findById = async (id) => {
  const salesById = await salesModel.findById(id);

  if (salesById.length === 0) {
    return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
  }

  return { type: null, message: salesById };
};

module.exports = { insert, findAll, findById };
