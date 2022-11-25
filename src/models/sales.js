const connection = require('./db/connection');

const insert = async () => {
   const [{ insertId }] = await connection.execute(
    'INSERT INTO sales (date) VALUE (NOW())',
   );

  return insertId;
};

const findAll = async () => {
  const [result] = await connection.execute(
    `SELECT sale_id as saleId, product_id as productId, date,  quantity
    FROM sales_products as sp
    RIGHT JOIN sales as s ON s.id = sp.sale_id
    ORDER BY saleId, productId`,
  );

  return result;
};

const findById = async (id) => {
  const [result] = await connection.execute(
    `SELECT
    date,
    product_id as productId,
    quantity
    FROM sales_products as sp
    RIGHT JOIN sales as s ON s.id = sp.sale_id
    WHERE sp.sale_id = ?
    ORDER BY productId`,
    [id],

  );

  return result;
};

module.exports = { insert, findAll, findById };
