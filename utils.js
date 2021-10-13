// create a findById, which takes an ID and an itemList
// loop through the itemList in a list
// if the item's ID is equal to the ID argument, return the item 
// else, continue the loop

export function findById(id, itemList){
    for (let item of itemList){
        if (item.id === id){
            return item;
        }
    }
}

export function calcOrderTotal(cart, itemList) {
    let orderTotal = 0;
    for (let item of cart) {
        const book = findById(item.id, itemList);
        orderTotal = orderTotal + (book.price * item.qty); 
    }

    return orderTotal;
}

export function toUSD(number) {
    return number.toLocaleString('en-us', { style: 'currency', currency: 'USD' }); 
}

// create getCart() function
export function getCart() {
    const cartString = localStorage.getItem('CART') || '[]'; 
    console.log(cartString);
    const cart = JSON.parse(cartString); 
    return cart;
}

// create addItem(id) function

export function 

// create clearCart() function 