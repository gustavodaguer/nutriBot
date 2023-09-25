
import { Router } from 'express';
import { foodRoutes } from './food';

const router = Router();

foodRoutes(router);

export default router;