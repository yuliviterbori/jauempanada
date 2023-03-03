const Users = require('../controllers/user.controller');
const { authenticate } = require('../config/jwt.config');
module.exports = app => {
  app.post("/api/user/register", Users.register);
  app.post("/api/user/login", Users.login);
  // this route now has to be authenticated
  app.get("/api/user/status", authenticate, Users.checkLogin);
  app.get("/api/user/logout", authenticate, Users.logout);
  app.get("/api/user", authenticate, Users.getUser);
}