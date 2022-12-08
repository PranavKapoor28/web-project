const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const mongoose = require("mongoose");
const PDFDocument = require("pdfkit");

const Order = require("../models/order");
const Car = require("../models/car");
const User = require("../models/user");

//Create new Order entry
const addOrder = async (req, res) => {
  const errors = validationResult(req);
};

//Update single order price
const updatePayOption = async (req, res) => {};

//Create PDF on checkout
const pdfInvoice = async (req, res) => {};

exports.addOrder = addOrder;
exports.deleteOrder = deleteOrder;
exports.getUsersOrders = getUsersOrders;
exports.getOrderById = getOrderById;
exports.updatePayOption = updatePayOption;
exports.pdfInvoice = pdfInvoice;
