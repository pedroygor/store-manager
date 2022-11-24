const connection = require('./db/connection');

const insert = async (newSales, salesId) => {
 await Promise.all(
    newSales.map(async ({ productId, quantity }) => {
     await connection.execute(
     `INSERT INTO sales_products (sale_id, product_id, quantity)
      VALUE (?, ?, ?)`,
     [salesId, productId, quantity],
   );
   }),
);

  return newSales;
};

module.exports = { insert };
