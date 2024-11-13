const express = require('express');
const router = express.Router();
const controller = require('../Controllers/index');

router.get('/', controller.getAllItems);


router.get('/shirts', controller.getAllShirts);

router.get('/shirts/:type', controller.shirtsByType);

router.get('/electronics', controller.getAllElectronics);


router.get('/electronics/:type', controller.electronicsByType);

router.get('/mobiles', controller.getAllMobiles);

router.get('/mobiles/:type', controller.mobileByType);

module.exports = router;
