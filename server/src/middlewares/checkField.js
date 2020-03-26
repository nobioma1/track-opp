function checkField(req, res, next) {
  if (!req.body.field) {
    return res.status(400).json({ error: `['field'] is required` });
  }
  return next();
}

module.exports = checkField;
