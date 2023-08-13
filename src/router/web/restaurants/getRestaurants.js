const express = require('express');
const router = express.Router();
const restaurants_controller = require('../../../controller/restaurants');
router.get('/',restaurants_controller.getRestaurants );
module.exports = router;