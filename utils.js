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
    const cart = JSON.parse(cartString); 
    return cart;
}

// create addItem(id) function

export function addItem(id) {
    const cart = getCart(); 
    const cartItem = findById(id, cart); 
    if (cartItem) {
        cartItem.qty++;
    } else {
        const newItem = { id: id, qty: 1 }; // could add any key:value pair here
        cart.push(newItem); 
    }
    const addString = JSON.stringify(cart); 
    localStorage.setItem('CART', addString); 
}

// create clearCart() function 

export function clearCart() {
    localStorage.removeItem('CART'); 
}

// create getProducts() function

import { cookbooks } from './data/cookbooks.js'; 

export function getProducts() {
    let lsProducts = localStorage.getItem('PRODUCTS'); 
    const products = JSON.parse(lsProducts); 

    if (!products){
        const productString = JSON.stringify(cookbooks); 
        localStorage.setItem('PRODUCTS', productString); 
    }

    return products || cookbooks; 
}

// create addProduct() function 

export function addProduct(newProduct) {
    let products = getProducts(); 
    products.push(newProduct); 
    let productString = JSON.stringify(products); 
    localStorage.setItem('PRODUCTS', productString); 
}