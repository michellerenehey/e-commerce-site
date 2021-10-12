// import cookbook data
// import cart data 
// get the product from the cookbook arrray, so that we can acess name + price
// we'll use findById for that! 
// finally, create the table using/building DOM elements

import { cookbooks } from '../data/cookbooks.js'; 
import { cart } from '../data/cart-data.js'; 
import { findById } from '../utils.js'; 

for (let cartItem of cart) {
    const bookData = findById(cartItem.id, cookbooks); 
    
    //next, create the table!
}