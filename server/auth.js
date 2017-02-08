const expireTime = 1000 * 60;

module.exports = function (req, res, next) {
  res.header('Access-Control-Expose-Headers', 'access-token');
  const now = Date.now();

  let unauthorized = true;
  const token = req.headers['access-token'];
  if (token) {
    const expired = now - token > expireTime;
    if (!expired) {
      unauthorized = false;
      res.header('access-token', now);
    }
  }

  if (unauthorized) {
    res.sendStatus(401);
  } else {
    next();
  }
};
