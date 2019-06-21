const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    const { username, password } = req.body;
    const db = req.app.get("db");
    const { session } = req;
    const userFound = await db.check_username({ username });
    if (userFound[0]) return res.status(409).send("User already exists");
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const createdUser = await db.register({
      username,
      password: hash
    });
    session.username = {
      username: createdUser[0].username
    };
    res.status(200).send(session.user);
  },

  login: async (req, res) => {
    const db = req.app.get("db");
    const { session } = req;
    const { username, password } = req.body;
    const userFound = await db.check_username({ username });
    if (!userFound) return res.status(404).send(`User does not exist`);
    const authenticated = bcrypt.compareSync(password, userFound[0].password);
    if (authenticated) {
      session.username = {
        id: userFound[0].username,
        username: userFound[0].username
      };
      res.status(200).send(session.user);
    } else {
      res.status(401).send(`Incorrect username or password`);
    }
  }
};
