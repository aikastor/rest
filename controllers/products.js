const express = require('express');
const router = express.Router();

const db = require('./queries');

router.get('/', db.getProducts);

module.exports = router;
