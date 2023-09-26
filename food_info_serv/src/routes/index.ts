
import { Router } from 'express';
import { foods_routes } from './food';

const router = Router();

router.use('/foods', foods_routes);

export default router;