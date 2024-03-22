import { Router } from 'express';
import { ProductControllers } from './product.controller';

const router = Router();
router.post('/', ProductControllers.createProductIntoDB);
router.get('/', ProductControllers.getAllProductFromDB);
router.get('/:serviceId', ProductControllers.getSingleProductFromDB);
router.patch('/:serviceId', ProductControllers.updateProductIntoDB);
router.delete('/:serviceId', ProductControllers.deleteProductFromDB);

export const ProductRoutes = router;
