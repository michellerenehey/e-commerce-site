import { addProduct } from '../utils.js';

const productForm = document.getElementById('product-form'); 

productForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const data = new FormData(productForm); 
    const newProduct = {
        id: data.get('id-input'), 
        name: data.get('name-input'), 
        img: data.get('img-input'), 
        author: data.get('author-input'), 
        publisher: data.get('publisher-input'), 
        price: data.get('price-input')
    }; 
    addProduct(newProduct); 
    alert('New book added to the inventory!'); 
});