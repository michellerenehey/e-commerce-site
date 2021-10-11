// import functions
import { cookbooks } from './cookbooks.js'; 

// grab important DOM elements

const productList = document.getElementById('product-list'); 

// create looping element
for(let book in cookbooks) {
  const productCard = document.createElement('div'); 
  productCard.classList.add('product-list'); 

  const productHeader = document.createElement('h3'); 
  productHeader.textContent = cookbooks.name; 

  const productImg = document.createElement('img'); 
  productImg.src = cookbooks.img; 
  console.log(productImg);
  
}