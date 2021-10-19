import { Router } from 'express';

import * as formController from '../controllers/form';
import * as formValidator from '../validators/form';

const router = Router();

/**
 * GET /api/form
 */
router.get('/', formController.fetchAvailabeForms);

/**
 * GET /api/form/:id
 */
router.get('/:id',formValidator.validateFetchById , formController.fetchById);

export default router;