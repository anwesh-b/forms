import { Router } from 'express';

import formRouter from './routes/form';

/**
 * Contains all API routes for the application.
 */
const router = Router();

/**
 * GET /api
 */
router.get('/', (req, res) => {
    res.json({
        app: req.app.locals.title,
        apiVersion: req.app.locals.version
    });
});

router.use('/form', formRouter);

export default router;
