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

for (let addBtn of addButtons) {
    addBtn.addEventListener('click', () => {
        addItem(addBtn.id); 
        let cart = getCart(); 
        let itemQty = findById(addBtn.id, cart).qty; 
        const qtyAdded = document.getElementById(`qty${addBtn.id}`);
        qtyAdded.textContent = itemQty;
    }); 
}

