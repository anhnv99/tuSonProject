const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { productDetailsService } = require('../services');

const createProductDetails = catchAsync(async (req, res) => {
  const productDetails = await productDetailsService.createProductDetails(req.body);
  res.status(httpStatus.CREATED).send(productDetails);
});

const getProductDetailss = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['productDetailsCode', 'name', '']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await productDetailsService.queryProductDetailss(filter, options);
  res.send(result);
});

const getProductDetails = catchAsync(async (req, res) => {
  const productDetails = await productDetailsService.getProductDetailsById(req.params.productDetailsId);
  if (!productDetails) {
    throw new ApiError(httpStatus.NOT_FOUND, 'ProductDetails not found');
  }
  res.send(productDetails);
});

const updateProductDetails = catchAsync(async (req, res) => {
  const productDetails = await productDetailsService.updateProductDetailsById(req.params.productDetailsId, req.body);
  res.send(productDetails);
});

const deleteProductDetails = catchAsync(async (req, res) => {
  await productDetailsService.deleteProductDetailsById(req.params.productDetailsId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createProductDetails,
  getProductDetailss,
  getProductDetails,
  updateProductDetails,
  deleteProductDetails,
};
