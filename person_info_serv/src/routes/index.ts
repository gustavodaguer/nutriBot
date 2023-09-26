
import { Router } from 'express';
import { persons_routes } from './person';

const router = Router();

router.use('/persons', persons_routes);

export default router;