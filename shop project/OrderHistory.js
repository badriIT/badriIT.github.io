const OrderedProducts = JSON.parse(localStorage.getItem('orderedProducts')) || [];
const container = document.querySelector('.container');
const shipTo = document.querySelector('.ship-to');

let userInfosSingInStorage = JSON.parse(localStorage.getItem('userInfosSingIn')) || [];



function displayOrderedProducts() {
    // Loop through all ordered products

    console.log(OrderedProducts);

if (OrderedProducts.length == 0) {
     container.innerHTML = ` <p class="IfBlank">Your Order History is Blank, Start Buying to fill It!!!</p>
     <i class="ri-shopping-cart-2-line"></i>
     `
} else {
    OrderedProducts.forEach(order => {
        let orderTotalPrice = 0;

       

        const randomNumber = Math.floor(Math.random() * 100000000)

   



        

            order.forEach(product => {

            if (product.totalPrice) {
                orderTotalPrice += parseFloat(product.totalPrice);
            } else {
                console.log("Product has no valid totalPrice:", product);
            }
        });


        userInfosSingInStorage.forEach(el => {
            
            
         
            
            container.innerHTML += `
                <div class="up_content">
                    <div class="up_text">
                        <div class="left-up">
                            <p class="orederPlaced">Order placed</p>
                            <p class="Total">Total</p>
                            <p class="ship-to">Ship to</p>
                        </div>

                        <div class="right-up">
                            <p class="orderNumber">Order#</p>
                            <p class="randomNum">${randomNumber}</p>
                        </div>
                    </div>

                    <div class="down_text">
                        <div class="left">
                            <p class="when">June 2, 2023</p>
                            <p class="total-price"> $<span class="order-total">${orderTotalPrice.toFixed(2)}</span></p>
                            <p class="nameOfOrderer">${el.Surname}</p>
                        </div>

                        <div class="right">
                            <p class="order-details">View order details</p>
                            <div class="line"></div>
                            <p class="invoice">View invoice</p>
                        </div>
                    </div>
                </div>


<div class="whole-content2" >
             <div>
              <p class="orederPlaced">Order placed</p>
              <p class="when">June 2, 2023</p>
              </div>

              
             <div>
             <p class="Total">Total</p>
             <p class="total-price"> $<span class="order-total">${orderTotalPrice.toFixed(2)}</span></p>
              </div>

              
             <div>
              <p class="ship-to">Ship to</p>
               <p class="nameOfOrderer">${el.Surname}</p>
              </div>


               <div>
               <p class="orderNumber">Order#</p>
                            <p>${randomNumber}</p>
              </div>


              <div class="right2">
                            <p class="order-details">View order details</p>
                           
                            <p class="invoice">View invoice</p>
                        </div>
</div>
            `;
        });


        order.forEach(product => {

           
            

            container.innerHTML += `
                <div class="forCards">
                    <div class="img">
                        <img class="productImg" src="${product.image}" alt="${product.title}">
                    </div>

                    <div class="texts-whole">
                        <div class="texts">
                            <p class="title">${product.title}</p>
                        </div>

                        <div class="buttons">
                           <button class="buy"><i class="ri-loop-left-line"></i> Buy it again  </button>
                           <button class="view"> View your Item </button>
                           <button class="Tack"> Track package </button>
                            <button class="three">•••</button>

                        </div>
                    </div>
                </div>
            `;
        });
    });
}


    
}


displayOrderedProducts();
