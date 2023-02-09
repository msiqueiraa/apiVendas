import routes from '@modules/products/routes/Products.routes';
import { Router } from 'express';

const rout = Router();

rout.use('/products', routes);
rout.get('/', (request, response) => {
  return response.json({ message: 'Hello Dev' });
});

export default rout;
