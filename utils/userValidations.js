const name = Joi.string().min(8).max(30).pattern(/^[a-zA-Z' ]{3,20}$/).required().messages({
  'string.pattern.base': `Your name can only contain lower and uppercase letters and apostrophes`,
  'string.empty': `Name cannot be an empty field`,
  'string.min': `Name should have a minimum length of {#limit}`,
  'string.max': `Name should have a maximum length of {#limit}`,

});