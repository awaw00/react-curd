const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.post('/login', function (req, res, next) {
  res.header('Access-Control-Expose-Headers', 'access-token');
  const {account, password} = req.body;
  if (account === 'admin' && password === '123456') {
    res.header('access-token', Date.now());
    res.json(true);
  } else {
    res.json(false);
  }
});

server.use(require('./auth'));
server.use(router);

server.listen(3000, function () {
  console.log('JSON Server is running in http://localhost:3000');
});
