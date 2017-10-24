const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

/* PORT utilisé pour récupérer le port qui sera
fixé par Heroku en production - sinon port 5000 en DEV */

const PORT = process.env.PORT || 5000;
app.listen(PORT);
