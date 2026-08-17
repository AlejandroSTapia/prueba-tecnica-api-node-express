import express from 'express';
import textRouter from './routes/textRoutes.js';
import swaggerSpec from './config/swagger.js';

const app = express();

app.use(express.json());

app.use('/text', textRouter);

app.get('/api-docs/swagger.json', (req, res) => {
  res.json(swaggerSpec);
});

app.get(['/api-docs', '/api-docs/'], (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>API Documentation</title>

        <link
          rel="stylesheet"
          href="https://unpkg.com/swagger-ui-dist@5.32.0/swagger-ui.css"
        />
      </head>

      <body>
        <div id="swagger-ui"></div>

        <script src="https://unpkg.com/swagger-ui-dist@5.32.0/swagger-ui-bundle.js"></script>

        <script>
          window.onload = () => {
            SwaggerUIBundle({
              url: '/api-docs/swagger.json',
              dom_id: '#swagger-ui'
            });
          };
        </script>
      </body>
    </html>
  `);
});

export default app;