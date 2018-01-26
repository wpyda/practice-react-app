const orderTotal = orders => orders.reduce((reduced, item, i, arr)=> {
    if(item.name === 'shipping' && reduced > 100)
        return reduced
    else
        return reduced + item.price * (item.quantity || 1)
}, 0)

if(
    orderTotal([
        {name: 'cats house', price: 100},
        {name: 'cats food', price: 10},
        {name: 'cats toy', price: 43},
    ]) !== 153
) throw Error('Simple adding prices fails!')

if(
    orderTotal([
        {name: 'cats house', price: 200},
        {name: 'cats food', price: 11},
        {name: 'cats toy', price: 34},
    ]) !== 245
) throw Error('Simple adding prices fails!')

if(
    orderTotal([
        {name: 'cats house', price: 200, quantity: 2},
        {name: 'cats food', price: 11, quantity: 1},
        {name: 'cats toy', price: 34, quantity: 1},
    ]) !== 445
) throw Error('Adding prices with quantity fails!')

if(
    orderTotal([
        {name: 'cats house', price: 200, quantity: 2},
        {name: 'cats food', price: 11, quantity: 1},
        {name: 'cats toy', price: 34, quantity: 1},
        {name: 'shipping', price: 40},
    ]) !== 445
) throw Error('Adding prices with quantity & free shipping after 100, fails!')

if(
    orderTotal([
        {name: 'cats food', price: 11, quantity: 1},
        {name: 'cats toy', price: 34, quantity: 1},
        {name: 'shipping', price: 40},
    ]) !== 85
) throw Error('Adding prices with quantity & paid shipping fails!')


// TODO - below dont work because shipping is not last item
if(
    orderTotal([
        {name: 'shipping', price: 40},
        {name: 'cats house', price: 200, quantity: 2},
        {name: 'cats food', price: 11, quantity: 1},
        {name: 'cats toy', price: 34, quantity: 1}
    ]) !== 445
) throw Error('Adding prices with quantity & free shipping after 100, fails!')