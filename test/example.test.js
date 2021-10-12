// IMPORT MODULES under test here:
import { cookbooks } from '../data/cookbooks.js';
import { renderBook } from '../render-book.js';
import { findById } from '../utils.js';
import { calcOrderTotal } from '../utils.js';
import { cart } from '../data/cart-data.js';    
import { renderLineItem } from '../render-line-item.js';

const test = QUnit.test;

test('renderBook should return an HTML snippet', (expect) => {
  
    // grab outerHTML from first object 
    const expected = '<div class="product-card"><h3>Baking with Fortitude</h3><img src="./assets/fortitude.jpeg"><p class="author">Author: Dee Rettali</p><p class="publisher">Publisher: Bloomsbury</p><p class="price">Price: $28</p><button class="add-button">Add to cart</button></div>';
    
    // declare variable to grab first item from object
    const fortitude = cookbooks[0]; 

    // call the function on the abov variable, specifically targeting outerHTML
    const actual = renderBook(fortitude).outerHTML;

    //Expect
    expect.equal(actual, expected);
});

test('find id should return the item/product matching the id', (expect) => {

    const expected = {    
        id: '1', 
        name: 'Baking with Fortitude', 
        img: './assets/fortitude.jpeg', 
        author: 'Dee Rettali',
        publisher: 'Bloomsbury', 
        price: 28.00, };


    const actual = findById('1', cookbooks); 
    expect.deepEqual(actual, expected);
});

test('total should return the total of the items in the cart', (expect) => {

    const expected = 98; 

    const actual = calcOrderTotal(cart, cookbooks); 
    expect.equal(actual, expected);
}); 

test('renderLineItem should return html snippet', (expect) => {

    const expected = '<tr><td>Baking with Fortitude</td><td>28</td><td>1</td><td>$28.00</td></tr>';
    
    const actual = renderLineItem(cart[0], findById('1', cookbooks)).outerHTML; 
    expect.equal(actual, expected); 
}); 