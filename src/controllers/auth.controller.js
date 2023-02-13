const { validationResult } = require("express-validator");

const login = (req, res, next) => {
  res.status(200).send({
    message: "Login API is working",
  });
};

const register = (req, res, next) => {
  res.status(200).send({
    message: "Register API is working",
  });
};

const me = (req, res, next) => {
  res.status(200).send({
    message: "Register API is working",
  });
};

module.exports = { login, register, me };
