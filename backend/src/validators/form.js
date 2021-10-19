import Joi from "@hapi/joi";

import {validate} from '../utils/validate';

// Validation Schema
const fetchByIdSchema = Joi.object({
    id: Joi.number().integer().min(0).required(),
});

/**
 * Validate fetch by id request.
 * 
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 * @returns {Promise}
 */
export const validateFetchById = (req, res, next) => {
    return validate(req.params, fetchByIdSchema)
        .then(() => next())
        .catch(err => next(err));
}
