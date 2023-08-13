const router = require('express').Router();

//users

//featured_row
router.use('/features/get', require('./features/getFeatures')); // get  categories

//categories
router.use('/categories/get', require('./categories/getCategories')); // get  categories

//restaurants
router.use('/restaurants/get', require('./restaurants/getRestaurants')); // get  orders in cart



module.exports = router;
