// import cookbook data
// import cart data 
// get the product from the cookbook arrray, so that we can acess name + price
// we'll use findById for that! 
// finally, create the table using/building DOM elements
// loop through each item in the cart (cart-data) and update the html
// elements accordingly 
// rows in my HTML table correspond to items in the cart 

// <<tr>
//     <td>Baking with Fortitude</td>
//     <td>28.00</td>
//     <td>1</td>
//     <td>28.00</td>
// </tr>

// import { cookbooks } from '../data/cookbooks.js'; 
import { renderLineItem } from '../render-line-item.js'; 
import { calcOrderTotal, findById, toUSD, getCart, clearCart, getProducts } from '../utils.js'; 

const cart = getCart(); 
const cookbooks = getProducts();

const tbody = document.getElementById('table-body'); 

for (let cartItem of cart) {
    const bookData = findById(cartItem.id, cookbooks); 
  
    const tr = renderLineItem(cartItem, bookData); 
    tbody.appendChild(tr);
} 

const orderTotal = calcOrderTotal(cart, cookbooks); 
const tdOrderTotal = document.getElementById('order-total'); 
tdOrderTotal.textContent = toUSD(orderTotal); 

const orderButton = document.getElementById('order-button'); 
orderButton.addEventListener('click', () => {
    alert('Are you sure? No refunds!');
    clearCart(); 
    window.location.replace('..'); 
}); 

