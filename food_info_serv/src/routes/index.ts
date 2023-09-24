
import { Router } from 'express';
import { createController } from '../controllers/create';
import error_middleware from '../middlewares/error';

const router = Router();

router.use('/food')

router.post('/', createController, error_middleware)
router.get('/')
router.get('/:name')
router.put('/:name')
router.delete('/:name')


export default router;