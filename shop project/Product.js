const productContainer = document.querySelector('.productContainer');


const accClick = document.querySelector('#acc')

const AlertYouArenotLogginned = document.querySelector('.alert-loginErrAdmin')



function displayProductDetails() {
    // Get the product details from localStorage

    const clickedProducts = JSON.parse(localStorage.getItem('clickedProducts')) || [];
    

    clickedProducts.forEach(el => {
      
        productContainer.innerHTML = `
<a href="index.html">
        <button class="SeeOther"> <i class="ri-arrow-left-line"></i> See Other Products </button> 

</a>
        <div class="whole-info">


        <div class="product">

    <div class="image">
      <img class=" product-image" src="${el.image}" alt="imageHere">
    
    </div>
      



    <div class="info">
<p class="product-name">${el.title}</p>
<p class="product-price">${el.price}</p>


<div class="select">
<p> Size </p>
<select name="" id="" >
  <option value="">small</option>
  <option value="">medium</option>
  <option value="">large</option>
</select>

</div>


<div class="Quality">
 <p> Quantity </p>
<input class="number" type="number" min="1" placeholder="1">
</div>


<button onclick="cart2(event)" class="cart">Add to Cart</button>

<button class="Buy">Buy Now</button>



<div class="Product-info"></div>
<div class="RETURN-POLICY"></div>
<div class="SHIPPING-INFO"></div>
<p class="category">${el.category}</p>
    </div>
  </div>

  </div>


  <div class="description">
  <p class="description">Description: ${el.description}</p>
</div>

        `
     
    });
  

    
}

displayProductDetails();



function userNameShow() {
  let userInfosSingInStorage = JSON.parse(localStorage.getItem('userInfosSingIn')) || [];
  
  userInfosSingInStorage.forEach(name => {
      accClick.innerHTML = `${name.Surname}`


      accClick.addEventListener('click', function () {
          if (accClick.innerHTML === name.Surname ) {
              window.open('mainInfo.html')
              window.close('index.html')
         }  
      })
      
  })

 

}

userNameShow()


function cart2(event) {
  if(accClick.innerHTML == '' ) {
    AlertYouArenotLogginned.style.top = '2%'


    setInterval(() => {
        AlertYouArenotLogginned.style.top = '-100%'
    }, 4000);
} else if(accClick.innerHTML.length !== 0) {

   window.open('cart.html')

   const productCard = event.target.closest('.whole-info'); 
   const productTitle = productCard.querySelector('.product-name').textContent;
   const productPrice = productCard.querySelector('.product-price').textContent;
   const productImage = productCard.querySelector('.product-image').src;
   const category = productCard.querySelector('.category').textContent
  
 
 
   const cartProduct = {
       title: productTitle,
       price: productPrice,
       image: productImage,
       category: category,
       
   };
 
   let Cartproducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
   const alreadyProducts = Cartproducts.find(product => product.title === cartProduct.title);
 
   if (alreadyProducts) {
 
   } else {
   
       Cartproducts.push(cartProduct);
 
       
       localStorage.setItem('cartProducts', JSON.stringify(Cartproducts));
   }

}



}


