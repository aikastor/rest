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
        console.log(response);
        res.send(response.rows)
    } catch(error) {
        res.status(404).send({ error})
    }
};

const createProduct = async (req,res) => {

    const {name, description, image, price, category} = req.body;

    try {
        await pool.query('INSERT INTO public.products ' +
            '(name, description, image, price, category)' +
            ' VALUES ($1, $2, $3, $4, $5)', [name,description, image, price, category]);
        res.status(201).send('Product added!');
    } catch (error) {
        res.status(400).send({error});
    }
};
const updateProduct = async (req, res) => {
    const {name, description, image, price, category} = req.body;
    const id = req.params.id;
    console.log(id);
    try {
        console.log(name);
        await pool.query('UPDATE products SET ' +
            'name=$1, description=$2, image=$3, price=$4, category=$5 ' +
            'WHERE id=$6', [name,description, image, price, category,id]);

        res.send('Product updated!')
    } catch (error) {
        res.status(400).send({error})
    }
};
const deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        await pool.query('DELETE FROM products where id=$1', [id]);
        res.status(200).send('Item deleted!')
    } catch (error) {
        res.status(400).send({error})
    }
};


module.exports = {
  getProducts,
    createProduct,
    updateProduct,
    deleteProduct
};
