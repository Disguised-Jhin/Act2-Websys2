const express = require('express');
const router = express.Router();
const orderData = require('../../data/orders')
const orderController = require('./orders-controller')

router.get('/', (req, res) => {
    
    let result = orderData

    if (req.query.totalFrom && req.query.totalTo){
        const lowerTotal = Number(req.query.totalFrom);
        const upperTotal = Number(req.query.totalTo);
        result = orderController.filterTotalAmount(result, lowerTotal, upperTotal)
    }
    if (req.query.status){
        const status = req.query.status;
        result = orderController.filterStatus(result, status)
    }

    res.send(result)
})

module.exports = router;