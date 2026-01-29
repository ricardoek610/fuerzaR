const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// endpoint de prueba
app.get("/anuncios", (req, res) => {
  res.json([
    {
      titulo: "Gira Ranchera 2026",
      descripcion: "Fechas confirmadas en México y USA"
    },
    {
      titulo: "Nuevo Álbum",
      descripcion: "Sonidos tradicionales con letras firmes"
    },
    {
      titulo: "Merch Oficial",
      descripcion: "Sombreros, camisas y sudaderas"
    }
  ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("API corriendo en puerto", PORT);
});