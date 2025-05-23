const validator = require("validator");

const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;
  if (!firstName || !lastName) {
    throw new Error("Name is not valid!");
  } else if (!validator.isEmail(emailId)) {
    throw new Error("Please Enter valid Email!");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Please Enter A Strong Password!");
  }
};

const validateEditProfileData = (req) => {
  const allowedEditFields = ["firstName", "lastName", "workEx", "jobTitle"];

  const isEditAllowed = Object.keys(req.body).every((field) =>
    allowedEditFields.includes(field)
  );

  return isEditAllowed;
};
module.exports = {
  validateSignUpData,
  validateEditProfileData,
};
