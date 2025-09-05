const express = require('express');
const app = express();

const customerRoutes = require('./src/customers/customer-routes');
const orderRoutes = require('./src/orders/order-routes');
const productRoutes = require('./src/products/products-routes');

app.use(express.json());

app.use('/customers', customerRoutes);
app.use('/orders', orderRoutes);
app.use('/products', productRoutes)

app.listen(3000, () => {
    console.log("Server started at http://localhost:3000");
})