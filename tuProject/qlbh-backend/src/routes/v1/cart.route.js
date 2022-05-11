const express = require('express');
const auth = require('../../middlewares/auth');
// const validate = require('../../middlewares/validate');
// const cartValidation = require('../../validations/cart.validation');
const cartController = require('../../controllers/cart.controller');

const router = express.Router();

router
  .route('/')
  .post(
    auth(),
    //   validate(cartValidation.createCart),
    cartController.createCart
  )
  .get(
    auth(),
    //    validate(cartValidation.getCarts),
    cartController.getCarts
  );

router
  .route('/:cartId')
  .get(
    auth(),
    //   validate(cartValidation.getCart),
    cartController.getCart
  )
  .patch(
    auth(),
    //   validate(cartValidation.updateCart),
    cartController.updateCart
  )
  .delete(
    auth(),
    //   validate(cartValidation.deleteCart),
    cartController.deleteCart
  );

module.exports = router;
