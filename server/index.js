const express = require( 'express');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');

const app = express()

const port = 7777

app.use(express.json())


app.get('/api/products', getProducts );
app.get('/api/products/:id', getProduct);


app.listen(port, () => {
  console.log(`Server listening on ${port}`)
});