const { Joi } = require('celebrate');

const requestValidation = {
  Create: Joi.object().keys({
    phone_number: Joi.string().required(),
    status: Joi.string()
      .valid('requested', 'contacted', 'converted')
      .required(),
    remarks: Joi.string().required(),
  }),
};

module.exports = requestValidation;
