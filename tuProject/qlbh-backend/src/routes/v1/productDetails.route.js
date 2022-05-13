const express = require('express');
const auth = require('../../middlewares/auth');
// const validate = require('../../middlewares/validate');
// const productDetailsValidation = require('../../validations/productDetails.validation');
const productDetailsController = require('../../controllers/productDetails.controller');

const router = express.Router();

router
  .route('/')
  .post(
    auth(),
    //   validate(productDetailsValidation.createProductDetails),
    productDetailsController.createProductDetails
  )
  .get(
    auth(),
    //    validate(productDetailsValidation.getProductDetailss),
    productDetailsController.getProductDetailss
  );

router
  .route('/:productDetailsId')
  .get(
    auth(),
    //   validate(productDetailsValidation.getProductDetails),
    productDetailsController.getProductDetails
  )
  .patch(
    auth(),
    //   validate(productDetailsValidation.updateProductDetails),
    productDetailsController.updateProductDetails
  )
  .delete(
    auth(),
    //   validate(productDetailsValidation.deleteProductDetails),
    productDetailsController.deleteProductDetails
  );

module.exports = router;
