const express = require('express');
const router = express.Router();
const productData = require('../../data/products')
const productController = require('./products-controller')

router.get('/', (req, res) => {
    
    let result = productData

    if (req.query.priceFrom && req.query.priceTo){
        const lowerValue = Number(req.query.priceFrom);
        const upperValue = Number(req.query.priceTo);
        result = productController.filterPriceRange(result, lowerValue, upperValue)
    }
    if (req.query.stockFrom && req.query.stockTo){
        const lowerValue = Number(req.query.stockFrom);
        const upperValue = Number(req.query.stockTo);
        result = productController.filterStockRange(result, lowerValue, upperValue)
    }
    if (req.query.name){
        const name = req.query.name
        result = productController.filterName(result, name)
    }
    if (req.query.desc){
        const description = req.query.desc;
        result = productController.filterDescription(result, description)
    }
    

    res.send(result)
})

module.exports = router;