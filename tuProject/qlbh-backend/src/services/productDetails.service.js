const httpStatus = require('http-status');
const { ProductDetails } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a productDetails
 * @param {Object} productDetailsBody
 * @returns {Promise<ProductDetails>}
 */
const createProductDetails = async (productDetailsBody) => {
  return ProductDetails.create(productDetailsBody);
};

/**
 * Query for productDetailss
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryProductDetailss = async (filter, options) => {
  const productDetailss = await ProductDetails.paginate(filter, options);
  return productDetailss;
};

/**
 * Get productDetails by id
 * @param {ObjectId} id
 * @returns {Promise<ProductDetails>}
 */
const getProductDetailsById = async (id) => {
  return ProductDetails.findById(id);
};

/**
 * Get productDetails by productDetailsCode
 * @param {string} productDetailsCode
 * @returns {Promise<ProductDetails>}
 */
const getProductDetailsByProductDetailsCode = async (productDetailsCode) => {
  return ProductDetails.findOne({ productDetailsCode });
};

/**
 * Update productDetails by id
 * @param {ObjectId} productDetailsId
 * @param {Object} updateBody
 * @returns {Promise<ProductDetails>}
 */
const updateProductDetailsById = async (productDetailsId, updateBody) => {
  const productDetails = await getProductDetailsById(productDetailsId);
  if (!productDetails) {
    throw new ApiError(httpStatus.NOT_FOUND, 'ProductDetails not found');
  }
  Object.assign(productDetails, updateBody);
  await productDetails.save();
  return productDetails;
};

/**
 * Delete productDetails by id
 * @param {ObjectId} productDetailsId
 * @returns {Promise<ProductDetails>}
 */
const deleteProductDetailsById = async (productDetailsId) => {
  const productDetails = await getProductDetailsById(productDetailsId);
  if (!productDetails) {
    throw new ApiError(httpStatus.NOT_FOUND, 'ProductDetails not found');
  }
  await productDetails.remove();
  return productDetails;
};

module.exports = {
  createProductDetails,
  queryProductDetailss,
  getProductDetailsById,
  getProductDetailsByProductDetailsCode,
  updateProductDetailsById,
  deleteProductDetailsById,
};
