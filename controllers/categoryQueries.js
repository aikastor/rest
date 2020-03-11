const Pool = require('pg').Pool;
const infoLogger = require('../infoLogger');
const errorLogger = require('../errorLogger');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'self_learning',
    password: 'password',
    port: 5432,
});

const createCategory = async (req, res) => {
   const {name,  parent} = req.body;


   pool.query('INSERT INTO categories ' +
            '(name, parent) ' +
            'VALUES ($1, $2)  RETURNING name, parent', [name, parent])
       .then(query => {
               infoLogger.info({'В функции createCategory - создание новой категории с данными: ':query.rows[0]});
               res.send(query.rows[0]);
       })
       .catch(error => {
           errorLogger.error({message: error.stack});
           res.status(400).send('Something went wrong!');
       });

};
const getCategories =  async (req, res) => {
};

const updateCategory = async (req, res) => {
    const {name, parent} = req.body;
    const id = req.params.id;
    try {
        console.log(name);
        await pool.query('UPDATE categories SET ' +
            'name=$1, parent=$2 ' +
            'WHERE id=$3', [name, parent, id]);

        res.send('Category updated!')
    } catch (error) {
        res.status(400).send({error})
    }
};
const deleteCategory = async (req, res) => {
    const id = req.params.id;
    try {
        await pool.query('DELETE FROM categories where id=$1', [id]);
        res.status(200).send('Category deleted!')
    } catch (error) {
        res.status(400).send({error})
    }
};

module.exports = {
    createCategory,
    getCategories,
    updateCategory,
    deleteCategory,

};
