const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// endpoint de prueba
app.get("/frases", (req, res) => {
  res.json([ "El respeto se gana, no se pide.",
    "Humildes pero firmes.",
    "Del rancho pa’l mundo.",
    "Con el polvo del camino seguimos de pie."
  ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("API corriendo en puerto", PORT);
});