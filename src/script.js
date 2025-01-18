
let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCart = document.querySelector('.icon-cart');
let iconCartSpan = document.querySelector('.icon-cart span');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
let products =[];
let cart =[];

iconCart.addEventListener('click', () => {
     body.classList.toggle('showCart');
})
closeCart.addEventListener('click', () => {
     body.classList.toggle('showCart');
})

const addDataToHTML = () =>{
     //remove dates default from html

     //add new datas
     if(products.length > 0) //if has data 
     {
          products.forEach(products => {
               let newProduct = document.createElement('div');
               newProduct.dataset.id = product.id;
               newProduct.classList.add('item');
               newProduct.innerHTML =
               `<img src="${product.image}" alt="">
                <h2>${product.name}</h2>
                <div class="price">$${product.price}</div>
                <button class="addCart">Add To Cart</button>`;
                listProductHTML.appendChild(newProduct);
          });
     }
}
listProductHTML.addEventListener('click', (event) => {
     let positionClick = event.target;
     if(positionClick.classList.contains('addCart')){
          let id_product = positionClick.parentElement.dataset.id;
            addToCart(id_product);
     }
})

const addToCart = (product_id) =>{
     let ProductInCart = cart.findIndex((value) => value.product_id == product_id);
     if(cart.length <= 0){
          cart = [{
               product_id: product_id,
               quantity: 1
          }];

     }else if (positionThisProductInCart < 0){
          cart.push({
               product_id: product_id,
               quantity: 1
          });
     }else{
          cart[positionThisProductInCart].quantity =cart[positionThisProductInCart].quantity + 1;
     }
     addCartToHTML();
     addCartToMemory();
}