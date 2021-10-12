// import cookbook data
// import cart data 
// get the product from the cookbook arrray, so that we can acess name + price
// we'll use findById for that! 
// finally, create the table using/building DOM elements

// <<tr>
//     <td>Baking with Fortitude</td>
//     <td>28.00</td>
//     <td>1</td>
//     <td>28.00</td>
// </tr>

import { cookbooks } from '../data/cookbooks.js'; 
import { cart } from '../data/cart-data.js'; 
import { findById } from '../utils.js'; 

// grab elements from HTML
const tbody = document.getElementById('table-body'); 

for (let cartItem of cart) {
    const bookData = findById(cartItem.id, cookbooks); 
    const tr = document.createElement('tr'); 
    const tdName = document.createElement('td'); 
    tdName.textContent = bookData.name; 
    const tdPrice = document.createElement('td'); 
    tdPrice.textContent = `$${bookData.price}`;
    const tdQty = document.createElement('td'); 
    tdQty.textContent = cartItem.qty; 
    const tdTotal = document.createElement('td'); 
    tdTotal.textContent = `$${cartItem.qty * bookData.price}`; 

    tr.append(tdName, tdPrice, tdQty, tdTotal); 
    tbody.append(tr);
}