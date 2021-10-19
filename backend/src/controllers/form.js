import * as formService from '../service/form';

/**
 * Fetch currently available forms
 * 
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 */
export async function fetchAvailabeForms(req, res, next) {
    try {
        const data = await formService.fetchAvailabeForms();

        res.json(data);
    } catch (error) {
        next(error);
    }
}

export async function fetchById(req, res, next) {
    try{
        const data = await formService.fetchById(req.params.id);

        res.json(data);
    } catch (error) {
        next(error);
    }
}
