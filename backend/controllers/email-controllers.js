const crypto = require("crypto");
const { validationResult } = require("express-validator");

const User = require("../models/user");
const Order = require("../models/order");
const { sendEmail, sendPasswordResetEmail } = require("../utils/Email");

//Send invoice by checkout
const sendInvoiceEmail = async (req, res) => {};

//Send reset passowrd link
const resetPassword = async (req, res) => {};

exports.sendInvoiceEmail = sendInvoiceEmail;
exports.resetPassword = resetPassword;
