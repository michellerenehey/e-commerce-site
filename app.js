// import functions
import { cookbooks } from './cookbooks.js'; 

// grab important DOM elements

const productList = document.getElementById('product-list'); 

// <div class="product-card">
//   <h3>Baking With Fortitutde</h3>
//   <img src="./assets/fortitude.jpeg">
//   <p>Bloomsbury</p>
//   <p>28.00</p>
// </div> */}

// create looping element
for(let book in cookbooks) {
  const productCard = document.createElement('div'); 
  productCard.classList.add('product-card'); 

  const productHeader = document.createElement('h3'); 
  productHeader.textContent = cookbooks.name; 

  const productImg = document.createElement('img'); 
  productImg.src = cookbooks.img; 
  console.log(productImg);

  // add publisher into p tag
  // add price into p tag
  
};