const express = require("express");
const app = express();
const PORT = process.env.PORT || 3002;


app.get("/api", (req, res) => {
  res.send("Bienvenido a la app de e-commerce");
});


app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto${PORT}`);
});