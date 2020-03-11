const express = require('express');
const cors = require('cors');

const controllers = require('./controllers');

const app = express();
const port = 8001;

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.use('/', controllers);

app.listen(port, () => {
    console.log('Server is runnindg!')
});
