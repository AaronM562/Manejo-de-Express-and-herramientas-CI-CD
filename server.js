const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Aplicacion desplegada correctamente");
});

app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto " + PORT);
});
