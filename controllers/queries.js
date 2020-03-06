const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'self_learning',
    password: 'password',
    port: 5432,
});

const getProducts = async (req, res) => {
    try {
        const response = await pool.query(`SELECT * FROM products`);
        res.send(response.rows)
    } catch(error) {
        res.status(404).send({error: "No products!"})
    }
};


module.exports = {
  getProducts,
};
