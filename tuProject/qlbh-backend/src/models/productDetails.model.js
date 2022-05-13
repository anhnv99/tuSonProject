const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const productDetailsSchema = mongoose.Schema(
  {
    quantity: {
      type: Number,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    productId: [
      {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'Product',
      },
    ],
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
productDetailsSchema.plugin(toJSON);
productDetailsSchema.plugin(paginate);

/**
 * @typedef ProductDetails
 */
const ProductDetails = mongoose.model('ProductDetails', productDetailsSchema);

module.exports = ProductDetails;
