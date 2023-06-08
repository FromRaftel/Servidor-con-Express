const express = require("express");
const ProductManager = require("./ProductManager");

const app = express();
const port = 8080;

// Ruta para obtener todos los productos
app.get("/products", async (req, res) => {
  const { limit } = req.query;
  const products = await ProductManager.getProducts(limit);
  res.json(products);
});

// Ruta para obtener un producto específico por su ID
app.get("/products/:pid", async (req, res) => {
  const { pid } = req.params;
  const product = await ProductManager.getProduct(pid);
  res.json(product);
});

// Iniciar el servidor y escuchar en el puerto especificado
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
