module.exports = (req, res, next) => {
  const MIN_LENGTH_NAME = 5;
  if (!('name' in req.body)) {
    return res.status(400).json({ message: '"name" is required' });
  }

  if (req.body.name.length < MIN_LENGTH_NAME) {
    return res.status(422)
      .json({ message: '"name" length must be at least 5 characters long' });
  }

  next();
};
