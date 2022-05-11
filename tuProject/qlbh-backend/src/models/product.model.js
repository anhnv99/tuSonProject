const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    price: {
      type: Number,
      required: true,
    },
    note: {
      type: String,
      required: true,
    },
    productCode: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    age: {
      type: String,
      required: true,
    },
    branch: {
      type: Number,
      required: true,
    },
    theme: {
      type: String,
      required: true,
    },
    origin: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    picture: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
productSchema.plugin(toJSON);
productSchema.plugin(paginate);

/**
 * Check if productCode is taken
 * @param {string} productCode - The user's productCode
 * @param {ObjectId} [excludeProductId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
productSchema.statics.isProductCodeTaken = async function (productCode, excludeProductId) {
  const user = await this.findOne({ productCode, _id: { $ne: excludeProductId } });
  return !!user;
};
/**
 * @typedef Product
 */
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
