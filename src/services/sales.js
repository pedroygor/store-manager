const { salesModel, salesProductModel } = require('../models/index');

const insert = async (sales) => {
  const salesId = await salesModel.insert();
  const productSales = await salesProductModel.insert(sales, salesId);

  return { type: null, message: { id: salesId, itemsSold: productSales } };
};

module.exports = { insert };
