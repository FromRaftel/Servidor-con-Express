const fs = require("fs/promises");

class ProductManager {
  static async getProducts(limit) {
    const data = await fs.readFile("products.json", "utf-8"); // Lee el contenido del archivo "products.json"
    const products = JSON.parse(data); // Convierte el contenido del archivo en un objeto JavaScript
    return limit ? products.slice(0, limit) : products; // Devuelve todos los productos o los primeros 'limit' productos, según sea el caso
  }

  static async getProduct(pid) {
    const data = await fs.readFile("products.json", "utf-8"); // Lee el contenido del archivo "products.json"
    const products = JSON.parse(data); // Convierte el contenido del archivo en un objeto JavaScript
    const product = products.find((p) => p.id === pid); // Busca el producto con el ID especificado
    return product ? product : { error: "El producto no existe" }; // Devuelve el producto encontrado o un objeto de error si no se encuentra
  }
}

module.exports = ProductManager;
