const connection = require('./db/connection');

const insert = async () => {
   const [{ insertId }] = await connection.execute(
    'INSERT INTO sales (date) VALUE (NOW())',
   );

  return insertId;
};

module.exports = { insert };
