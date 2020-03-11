const express = require('express');
const router = express.Router();

const db = require('./categoryQueries');

router.get('/', db.getCategories);
router.post('/', db.createCategory);
router.put('/:id', db.updateCategory);
router.delete('/:id', db.deleteCategory);

module.exports = router;
