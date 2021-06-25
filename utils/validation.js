const JOI = require("joi");

exports.contactValidation = (data) => {
  const schema = JOI.object({
    name: JOI.string().required().max(30).trim(),
    email: JOI.string().email().required().trim(),
    subject: JOI.string().required().max(30).trim(),
    message: JOI.string().required().max(150).trim(),
  });
  return schema.validate(data);
};
