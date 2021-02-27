'use strict'


function displayCart(){
    let cartItems=localStorage.getItem('productsInCart');
    cartItems=JSON.parse(cartItems);
    let productContainer=document.querySelector('.products');
    let cartCost= localStorage.getItem('totalCost');

    console.log(cartItems);
    if(cartItems&&productContainer){
        productContainer.innerHTML="";
        Object.values(cartItems).map(item =>{
            productContainer.innerHTML+=`
            <div class="product">
            <ion-icon name="close-circle-outline"></ion-icon>
            <img src=".images/${item.tag}.jpg">${item.name}    

            <div class="price">$${item.price},00</div>
            <style> .price{margin-left:80px}</style>
            <div class="quantity">
            

            <ion-icon name="caret-back-outline"></ion-icon>
            <span>${item.inCart}</span><ion-icon name="caret-forward-outline"></ion-icon></div>
            <div class="total">$${item.inCart*item.price},00
            </div>
            
            `
        

        });
        productContainer.innerHTML+=`
        <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">
                 Basket Total
            </h4>
            <h4 class="basketTotal">
            $${cartCost},00
            </h4>
        </div>
        `

    };


}
displayCart()