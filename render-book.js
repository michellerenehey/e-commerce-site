// bookObject : 
// {
//     id: '1', 
//     name: 'Baking with Fortitude', 
//     img: './assets/fortitude.jpeg', 
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
    authorName.textContent = book.author; 
  
    const publisherName = document.createElement('p'); 
    publisherName.textContent = book.publisher; 
    
    const price = document.createElement('p'); 
    price.textContent = book.price; 
  
    productCard.append(productHeader, productImg, authorName, publisherName, price);   
    return productCard; 
}