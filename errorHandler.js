// errorHandler.js
const errorDictionary = {
    PRODUCT_NOT_FOUND: { code: 404, message: 'Producto no encontrado.' },
    DUPLICATE_PRODUCT: { code: 400, message: 'Producto duplicado en el carrito.' },
    // Agrega más errores en la necesidades
  };
  
  module.exports = errorDictionary;
  