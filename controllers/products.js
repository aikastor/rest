const express = require('express');
const router = express.Router();

const db = require('./productQueries');

router.get('/', (req, res) =>{
    res.send('HERE!')
});
router.post('/', db.createProduct);
router.put('/:id', db.updateProduct);
router.delete('/:id', db.deleteProduct);

module.exports = router;
