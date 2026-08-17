import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Prueba técnica - API Node.js + Express',
      version: '1.0.0',
      description: 'API para procesamiento y transformación de cadenas de texto.'
    }
  },
  apis: ['./src/routes/*.js']
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;