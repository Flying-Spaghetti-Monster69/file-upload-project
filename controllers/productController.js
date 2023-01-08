const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");

const createProducts = async (req, res) => {
  console.log(req.body);
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ product });
};

const getAllProducts = async (req, res) => {
  res.send("get all products products");
};

module.exports = {
  createProducts,
  getAllProducts,
};
