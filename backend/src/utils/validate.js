import isEmpty from 'lodash/isEmpty';

/**
 * Utility helper for Joi validation.
 *
 * @param   {object}  data
 * @param   {object}  schema
 * @returns {Promise}
 */
export function validate(data, schema) {
    const { error, value } = schema.validate(data, { abortEarly: false });

    if (!isEmpty(error)) {
        return Promise.reject(error);
    }

    return Promise.resolve(value);
}
