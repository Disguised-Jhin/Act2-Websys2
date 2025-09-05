function filtName(data, nameQuery) {
    return data.filter(product => product.name.toLowerCase().includes(nameQuery.toLowerCase()))
}

function filtDescription(data, descriptionQuery) {
    return data.filter(product => product.desc.toLowerCase().includes(descriptionQuery.toLowerCase()))
}

function filtPriceRange(data, lowerValue, upperValue) {
    return data.filter(product => product.price >= lowerValue && product.price <= upperValue)
}

function filtStockRange(data, lowerValue, upperValue) {
    return data.filter(product => product.stock >= lowerValue && product.stock <= upperValue)
}

function filtStatus(data, status){
    return data.filter(order => order.status = status)
}

function filtTotalAmount(data, total) {
    return data.filter(order => order.total)
}

function filterStatus(data, status){
    return data.filter(order => order.status = status)
}

function filterTotalAmount(data, total) {
    return data.filter(order => order.total)
}

module.exports = {
    filtName, 
    filtDescription,
    filtPriceRange,
    filtStockRange,
    filtStatus,
    filtTotalAmount,
    filterStatus,
    filterTotalAmount
}
