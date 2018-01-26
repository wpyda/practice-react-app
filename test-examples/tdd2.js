const orderTotal = orders => orders.reduce( (reduced, item, i, arr) => {
    return reduced + item.price
}, 0)


if (orderTotal([
        {name: 'cat house', price: 100},
        {name: 'cat food', price: 50},
        {name: 'cat toy', price: 3}
    ]) !== 153
) throw Error('Simple adding prices fails')

if (orderTotal([
        {name: 'cat house', price: 22},
        {name: 'cat food', price: 11},
        {name: 'cat toy', price: 34}
    ]) !== 67
) throw Error('Simple adding prices fails')