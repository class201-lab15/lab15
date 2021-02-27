'use strict'

let carts = document.querySelectorAll('.add-cart');

let products=[
    {
        name:'JavaScript',
        tag:'javascript',
        price:15,
        inCart:0
    },
    {
        name:'css',
        tag:'css',
        price:20,
        inCart:0
    }
];

// numbers of items (books,video,classes)...
for(let i=0;i<carts.length;i++){
    carts[i].addEventListener('click',()=>{
        cartNumbers(products[i]);
        totalCost(products[i])
       
    })
}

// function for refreshing the cart and save data
function onLoadCartNumbers(){
    let productNumbers=localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.cart span').textContent=productNumbers;
    }

}
function cartNumbers(product){
    console.log('the product is',products);
    
    let productNumbers=localStorage.getItem('cartNumbers');
    console.log(productNumbers); 
    productNumbers= parseInt(productNumbers);
    if (productNumbers){
        localStorage.setItem('cartNumbers',productNumbers + 1)
        document.querySelector('.cart span').textContent=productNumbers + 1;
    }else{
            localStorage.setItem('cartNumbers',1)
            document.querySelector('.cart span').textContent=1;

        }
    setItems(product);
}

 function setItems(product){
    let cartItems=localStorage.getItem('productsInCart');
    cartItems=JSON.parse(cartItems);
    if (cartItems != null){
        // for other pproducts
        if(cartItems[product.tag]== undefined) {
            cartItems={
                ...cartItems,  /* all of the cart items*/
                [product.tag]:product

            }

        }
        console.log( cartItems[product.tag]);
        cartItems[product.tag].inCart += 1;
    }else{
        product.inCart= 1;
        cartItems ={
            [product.tag]:product
    }
     }
     localStorage.setItem('productsInCart',JSON.stringify(cartItems));
 }
 function totalCost(product){
     console.log('the product price is ',product.price);
     let cartCost= localStorage.getItem('totalCost');
     
     console.log('my cart cost is',cartCost);
     console.log(typeof cartCost);

     if (cartCost!=null){
        cartCost=parseInt(cartCost);
         localStorage.setItem('totalCost',cartCost+product.price);

     }else{
        localStorage.setItem('totalCost',product.price);
     }
     
 }


 

onLoadCartNumbers();
