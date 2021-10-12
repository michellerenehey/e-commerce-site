import { toUSD } from './utils.js'; 

export function renderLineItem(cartItem, bookData) {
    const tr = document.createElement('tr'); 
    
    const tdName = document.createElement('td'); 
    tdName.textContent = bookData.name; 
    
    const tdPrice = document.createElement('td'); 
    tdPrice.textContent = bookData.price;
    
    const tdQty = document.createElement('td'); 
    tdQty.textContent = cartItem.qty; 
    
    const tdTotal = document.createElement('td'); 
    const usdTotal = cartItem.qty * bookData.price; 
    tdTotal.textContent = toUSD(usdTotal); 

    tr.append(tdName, tdPrice, tdQty, tdTotal); 
    return tr;
}