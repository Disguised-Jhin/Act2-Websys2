function filterName(data, nameQuery) {
    return data.filter(product => product.name.toLowerCase().includes(nameQuery.toLowerCase()))
}

function filterDescription(data, descriptionQuery) {
    return data.filter(product => product.desc.toLowerCase().includes(descriptionQuery.toLowerCase()))
}

function filterPriceRange(data, lowerValue, upperValue) {
    return data.filter(product => product.price >= lowerValue && product.price <= upperValue)
}

function filterStockRange(data, lowerValue, upperValue) {
    return data.filter(product => product.stock >= lowerValue && product.stock <= upperValue)
}

function filterStatus(data, status){
    return data.filter(order => order.status = status)
}

function filterTotalAmount(data, total) {
    return data.filter(order => order.total)
}

function filterStatus(data, status){
    return data.filter(order => order.status = status)
}

function filterTotalAmount(data, total) {
    return data.filter(order => order.total)
}

module.exports = {
    filterName, 
    filterDescription,
    filterPriceRange,
    filterStockRange,
    filterStatus,
    filterTotalAmount,
    filterStatus,
    filterTotalAmount
}
