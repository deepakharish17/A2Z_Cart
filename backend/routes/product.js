const express = require('express');
const { getproducts, getSingleproducts } = require('../controllers/productController');
const router = express.Router();

router.route('/products').get(getproducts);
router.route('/products/:id').get(getSingleproducts);

module.exports = router;