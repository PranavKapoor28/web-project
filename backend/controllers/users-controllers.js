const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const User = require("../models/user");
require("dotenv").config();

//Register new user
const registerUser = async (req, res) => {};

//Login user
const loginUser = async (req, res) => {};

//Update users password
const updateUserPassword = async (req, res) => {};

exports.loginUser = loginUser;
exports.registerUser = registerUser;
exports.updateUserPassword = updateUserPassword;
