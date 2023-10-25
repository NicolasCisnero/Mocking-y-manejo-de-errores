
function generateMockProducts() {
    
    const mockProducts = [...]; // Agrega aquí van productos 
    return mockProducts;
  }
  
  module.exports = { generateMockProducts };

  const express = require('express');
const mockingModule = require('./mocking');

const app = express();

// Ruta para obtener productos mockeados
app.get('/mockingproducts', (req, res) => {
  const mockProducts = mockingModule.generateMockProducts();
  res.json(mockProducts);
});

// Otras rutas y configuraciones del servidor
// ...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
  
const express = require('express');
const errorHandler = require('./errorHandler');

const app = express();

// Rutas y configuraciones del servidor

// Ejemplo de uso de error handler
app.get('/product/:id', (req, res) => {
  const productId = req.params.id;
  // Simula un error de producto no encontrado
  if (!productExists(productId)) {
    const error = errorHandler.PRODUCT_NOT_FOUND;
    return res.status(error.code).json({ error: error.message });
  }
  // Continúa con la lógica de tu ruta
  // ...
});

// Otras rutas y configuraciones del servidor

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
