module.exports = (req, res, next) => {
  const sales = req.body;
  const MIN_VALUE_QUANTITY = 1;

  if (!sales.every((item) => 'productId' in item)) {
    return res.status(400).json({ message: '"productId" is required' });
  }

  if (!sales.every((item) => 'quantity' in item)) {
    return res.status(400).json({ message: '"quantity" is required' });
  }

  if (!sales.every((item) => item.quantity >= MIN_VALUE_QUANTITY)) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }

  next();
};
