const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const cartRoute = require('./cart.route');
const productRoute = require('./product.route');
const productDetailsRoute = require('./productDetails.route');
const orderRoute = require('./order.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/carts',
    route: cartRoute,
  },
  {
    path: '/orders',
    route: orderRoute,
  },
  {
    path: '/products',
    route: productRoute,
  },
  {
    path: '/productsDetails',
    route: productDetailsRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
