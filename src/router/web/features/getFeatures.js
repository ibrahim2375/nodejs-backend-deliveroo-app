const express = require('express');
const router = express.Router();
const features_controller = require('../../../controller/features');
router.get('/', features_controller.getFeatures);
module.exports = router;