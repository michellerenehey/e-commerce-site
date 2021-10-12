# Alchemy Bootstrap Template

## Making a plan

### HTML
* h1: welcome
* h2: little description
* div: empty, with id="product-list"
### CSS
* center the page
* put the images in a flexbox, and have them wrap
### IMAGES
* add images into assets folder to use in list
### DATA MODEL (cookbooks.js)
* create an ARRAY, and inside of that array, build objects
* what do I want people to know about my products? 
* cookbooks! here is what is important to me: 
    * id
    * name
    * image
    * publisher
    <!-- * type of cuisine -->
    * price 
### APP.JS
* here we will want to grab the dom elements that exist that we'll need: just the empty div
* build out the initial for-loop here (we'll move it later, but it might help to understand how it works!)
* we need to: 
    * create a div to hold each item
    * update a header in the div to include the name from our cookbooks list (h3)
    * update a image in the div to be the image from our cookbooks list (img)
    * update a p tag in the div to hold the publisher from our cookbooks list (p)
    * update a p tag in the div to hold the price from our cookbooks list (p)

### CREATE FUNCTION (render-product.js)
* now, instead of all of the DOM maniuplation happening in app.js, let's create it's own function to render all of the values from the list. we'll do that in a separate file, render-product.js.
* function will take in one of the items in the product-list array
* function will output the for-loop (dom manipulation), to create the html 
* don't forget to export! then don't forget to import in app.js! 


## To Run Cypress Tests
* `npm install`
* `npm test`
* Cypress will open -- you should then click "run <#> integration spec(s)"
    ![](cypress.png)
* Make sure all tests pass