// IMPORT MODULES under test here:
import { cookbooks } from '../data/cookbooks.js';
import { renderBook } from '../render-book.js';
import { calcOrderTotal, findById, getCart, addItem, clearCart } from '../utils.js';
import staticCart from '../data/cart-data.js';    
import { renderLineItem } from '../render-line-item.js';

const test = QUnit.test;

// TEST 1: RENDERBOOK
test('renderBook should return an HTML snippet', (expect) => {
  
    // grab outerHTML from first object 
    const expected = '<div class="product-card"><h3>Baking with Fortitude</h3><img src="./assets/fortitude.jpeg"><p class="author">Author: Dee Rettali</p><p class="publisher">Publisher: Bloomsbury</p><p class="price">Price: $28</p><button class=\"add-button\" id=\"1\">Add to cart</button><p class=\"quantity-in-cart\">0</p></div>';
    
    // declare variable to grab first item from object
    const fortitude = cookbooks[0]; 

    // call the function on the abov variable, specifically targeting outerHTML
    const actual = renderBook(fortitude).outerHTML;

    //Expect
    expect.equal(actual, expected);
});

// TEST 2: FINDBYID
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

// TEST 3: CALCORDERTOTAL
test('total should return the total of the items in the cart', (expect) => {

    // const expected = 98; 
    const cart = getCart(); 
    const actual = calcOrderTotal(cart, cookbooks); 
    expect.equal(actual, cart);
}); 

// TEST 4: RENDERLINEITEM
test('renderLineItem should return html snippet', (expect) => {

    const expected = '<tr><td>Baking with Fortitude</td><td>28</td><td>1</td><td>$28.00</td></tr>';
    // const cart = getCart(); 
    // console.log(cart);
    const actual = renderLineItem(staticCart[0], findById(staticCart[0].id, cookbooks)).outerHTML; 
    expect.equal(actual, expected); 
}); 

// TEST 4: GETCART() - when cart exists
test('getCart should return the cart if it exists', (expect) => {
    // arrange using fakeCart
    const expected = [
        { id: '1', qty: 1 },
        { id: '2', qty: 2 },
    ]; 
    localStorage.setItem('CART', JSON.stringify(expected)); 

    // act
    const actual = getCart();

    // assert
    expect.deepEqual(actual, expected); 
}); 

// TEST 5: GETCART() - when cart doesn't exist
test('getCart should return an empty array if cart doesn not exist', (expect) => {
    //arrange
    localStorage.removeItem('CART'); 

    //act
    const actual = getCart(); 

    //assert
    expect.deepEqual(actual, []); 
}); 

// TEST 6: ADDITEM(ID) - when item exists in cart
test('addItem() should increment qty when item exists in cart', (expect) => {
    //arrange
    const expected = [
        { id: '1', qty: 1 },
        { id: '2', qty: 2 },
    ]; 
    localStorage.setItem('CART', JSON.stringify(expected)); 
 
    //act
    addItem('1'); 
    const cart = getCart(); 
    const actual = [
        { id: '1', qty: 2 },
        { id: '2', qty: 2 },
    ]; 

    //assert
    expect.deepEqual(cart, actual); 
}); 

// TEST 7: ADDITEM(ID) - when item doesn't exist in cart
test('addItem() should add 1 to qty when item does not already exist in cart', (expect) => {
    //arrange
    localStorage.removeItem('CART'); 
    const expected = [{ id: '1', qty: 1 }]; 

    //act
    addItem('1'); 
    const cart = getCart(); 

    //assert
    expect.deepEqual(cart, expected); 
}); 

// Test 8: CLEARCART() 
test('clearCart() should clear the localStorage', (expect) => {
    //arrange
    const expected = [
        { id: '1', qty: 1 },
        { id: '2', qty: 2 },
    ]; 
    localStorage.setItem('CART', JSON.stringify(expected)); 
    
    //act
    clearCart(); 
    const cart = getCart(); 
    const actual = []; 
    
    //assert
    expect.deepEqual(cart, actual); 
}); 
