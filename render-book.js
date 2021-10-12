// bookObject : 
// {
//     id: '1', 
//     name: 'Baking with Fortitude', 
//     img: './assets/fortitude.jpeg', 
//     author: 'Dee Rettali', 
//     publisher: 'Bloomsbury', 
//     price: 28.00, 
// }, 

export function renderBook(book) {
    const productCard = document.createElement('div'); 
    productCard.classList.add('product-card'); 
    
    const productHeader = document.createElement('h3'); 
    productHeader.textContent = book.name; 
  
    const productImg = document.createElement('img'); 
    productImg.src = book.img; 

    const authorName = document.createElement('p'); 
    authorName.classList.add('author'); 
    authorName.textContent = 'Author: ' + book.author; 
  
    const publisherName = document.createElement('p'); 
    publisherName.classList.add('publisher'); 
    publisherName.textContent = 'Publisher: ' + book.publisher; 
    
    const price = document.createElement('p'); 
    price.classList.add('price'); 
    price.textContent = `Price: $${Number(book.price)}`; 

    const addButton = document.createElement('button'); 
    addButton.classList.add('add-button'); 
    addButton.textContent = 'Add to cart'; 

    productCard.append(productHeader, productImg, authorName, publisherName, price, addButton);   
    return productCard; 
}