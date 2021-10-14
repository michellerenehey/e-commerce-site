// import functions
import { cookbooks } from './data/cookbooks.js'; 
import { renderBook } from './render-book.js';
import { addItem, findById, getCart } from './utils.js'; 

// grab important DOM elements
const productList = document.getElementById('product-list'); 

// model HTML skeleton: 
// <div class="product-card">
//   <h3>Baking With Fortitutde</h3>
//   <img src="./assets/fortitude.jpeg">
//   <p>Dee Rettali</p>
//   <p>Bloomsbury</p>
//   <p>28.00</p>
// </div> */}

// create looping element
for (let book of cookbooks) {
    const productCard = renderBook(book);
    productList.appendChild(productCard);
}

const addButtons = document.querySelectorAll('.add-button'); 

// const cartHolder = getCart(); 

for (let button of addButtons) {
    button.addEventListener('click', () => {
        addItem(button.id); 
        let cart = getCart(); 
        let itemQty = findById(button.id, cart).qty; 
        const qtyAdded = document.getElementById(`qty${button.id}`); // button.id (element)
        qtyAdded.textContent = itemQty;
    }); 
}

// const array = [{1:2, 3:4, 5:6}, {7:8, 9:10, 11:12}]; 
// console.log(`${array.1}`); 