const express = require('express');
const router = express.Router();
const customerData = require('../../data/customers')
const customerController = require('../controllers')

router.get('/', (req, res) => {
    
    let result = customerData

    if (req.query.dateFrom && req.query.dateTo){
        const lowerValue = req.query.dateFrom;
        const upperValue = req.query.dateTo;
        result = customerController.filterDate(result, lowerValue, upperValue)
    }
    if (req.query.gender){
        const gender = req.query.gender
        result = customerController.filterGender(result, gender)
    }
    if (req.query.age){
        const age = req.query.age;
        result = customerController.filterAge(result, age)
    }
    

    res.send(result)
})


module.exports = router;
