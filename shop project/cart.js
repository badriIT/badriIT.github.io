const Cartproducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
const productsContainer = document.querySelector('.CardProductContainer');
const totalPriceElement = document.querySelector('.totalprice');

const UserLogo = document.querySelector('.ri-user-line')
const UserLogo2 = document.querySelector('.ri-user-3-line')

const accClick = document.getElementById('acc')


const valuteChange = document.querySelector('.valute')

const card = document.querySelector('.card')

const GoToCashOut = document.querySelector('.Go-To-CashOut')








function cartProductsShow() {



    productsContainer.innerHTML = '';


    if (Cartproducts.length === 0) {
        productsContainer.innerHTML = `<p class="noProducts" >No products in cart yet.</p>`;
        totalPriceElement.textContent = 'Total: $0.00';
           GoToCashOut.style.display = 'none'
        return;
       
    } else if (Cartproducts.length > 0) {
              GoToCashOut.style.display = 'block'
       
    }
    let totalPrice = 0;

    Cartproducts.forEach((el, index) => {
        const price = parseFloat(el.price.replace(/[^0-9.-]+/g, ''));

        totalPrice += price * (el.quantity || 1);

        productsContainer.innerHTML += `
            <div class="whole_content" data-index="${index}">
                <div class="titles">
                    <div>
                        <p>Product:</p>
                    </div>

                    <div class="other">
                        <div class="price">
                            <p>Price</p>
                        </div>

                        <div class="quantity">
                            <p>Quantity</p>
                        </div>

                        <div>
                            <p>Total Price</p>
                        </div>
                    </div>
                </div>
                <div class="left-side">
                    <div class="imageSide">
                        <div class="imageClass"></div>
                        <div class="image-text1">
                            <img class="image-text" src="${el.image}" alt="">
                            <div class="names">
                                <p class="cateogry-text">${el.category}</p>
                                <p class="price-text">${el.title}</p>
                            </div>
                        </div>
                    </div>
                    <div class="info">
                        <p class="">1pcs: $${price}</p>
                        <div class="btns">
                            <button onclick="updateQuantity(${index}, 'minus')" id="minus" class="minus"> - </button>
                            <p id="quantity-${index}" class="quantity-text"> ${el.quantity || 1} </p>
                            <button onclick="updateQuantity(${index}, 'plus')" id="plus" class="plus"> + </button>
                        </div>
                        <p id="total-price-${index}">$${(price * (el.quantity || 1)).toFixed(2)}</p>
                    </div>
                </div>
                <button onclick="DelteItem(${index})" class="delteItem"> Delete Item From Cart </button>
            </div>
        `;
    });

    totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

cartProductsShow();

function updateQuantity(index, action) {
    const product = Cartproducts[index];
    const quantityElement = document.getElementById(`quantity-${index}`);
    const price = parseFloat(product.price.replace(/[^0-9.-]+/g, ''));

    if (action === 'plus') {
        product.quantity = (product.quantity || 1) + 1;
    } else if (action === 'minus') {
        product.quantity = (product.quantity || 1) - 1;
    }

    quantityElement.textContent = product.quantity;

    if (product.quantity <= 0) {
        Cartproducts.splice(index, 1);
        localStorage.setItem('cartProducts', JSON.stringify(Cartproducts));

        const itemElement = document.querySelector(`.whole_content[data-index="${index}"]`);
        itemElement.remove();
    } else {
        const priceElement = document.querySelector(`#total-price-${index}`);
        priceElement.textContent = `$${(price * product.quantity).toFixed(2)}`;

        localStorage.setItem('cartProducts', JSON.stringify(Cartproducts));
    }

    cartProductsShow();
}

function DelteItem(index) {
    const itemElement = document.querySelector(`.whole_content[data-index="${index}"]`);
    Cartproducts.splice(index, 1);
    localStorage.setItem('cartProducts', JSON.stringify(Cartproducts));

    itemElement.remove();

    cartProductsShow();
}


let body = document.querySelector('body')


if (localStorage.getItem('colorTheme') === 'dark') {
    body.classList.add('darktheme');
    
} else {
   
}


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

accClick.addEventListener('click', function(){
    if(accClick.innerHTML == '' ) {
        window.open('singIn.html')
        window.close('index.html')
    } else if (accClick.innerHTML === 'ADMIN') {
        window.open('admin.html')
            window.close('index.html')
       }
})
 
userNameShow()




const moon = document.querySelector('.ri-contrast-2-line');
const sun = document.querySelector('.ri-sun-line');



if (localStorage.getItem('colorTheme') === 'dark') {
    body.classList.add('darktheme');
    moon.style.display = 'none'; 
    sun.style.display = 'block';  
} else {
    moon.style.display = 'block';  
    sun.style.display = 'none';   
}

function switchTheme() {

    

    if (body.classList.contains('darktheme')) {
        body.classList.remove('darktheme');
        localStorage.removeItem('colorTheme');
        
        moon.style.display = 'block';  
        sun.style.display = 'none';   
        
    } else {
        body.classList.add('darktheme');
        localStorage.setItem('colorTheme', 'dark');
       
        moon.style.display = 'none';  
        sun.style.display = 'block';  
    }
}








function cashOut() {
    const Cartproducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
    let cashOutProducts = JSON.parse(localStorage.getItem('cashOutProducts')) || [];

    let grandTotal = 0;  

  


    Cartproducts.forEach(product => {
        const price = parseFloat(product.price.replace(/[^0-9.-]+/g, '')); //
        const totalPrice = price * (product.quantity || 1); 
        const title = product.title 

     console.log(product.title);
    let randomNumber = Math.floor(Math.random() * 10000)
     
        grandTotal += totalPrice;

        const CashOutProduct = {
            image: product.image,
            quantity: product.quantity || 1, 
            totalPrice: totalPrice.toFixed(2),
            title: title,
            randomNum:randomNumber
            

        };

        
        const alreadyExists = cashOutProducts.some(existingProduct => existingProduct.image === CashOutProduct.image);

        if (alreadyExists) {
         
            cashOutProducts = cashOutProducts.map(existingProduct => {
                if (existingProduct.image === CashOutProduct.image) {
                    existingProduct.quantity = CashOutProduct.quantity;
                    existingProduct.totalPrice = CashOutProduct.totalPrice;
                }
                return existingProduct;
            });
        } else {
          
            cashOutProducts.push(CashOutProduct);
        }
    });

    localStorage.setItem('cashOutProducts', JSON.stringify(cashOutProducts));

   
   let grandTotalLocal = localStorage.setItem('grandTotal');
   grandTotalLocal.push(grandTotal)
  
}





