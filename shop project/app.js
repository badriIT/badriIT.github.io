const CategoryButtons = document.querySelector('.CategoryButtons') // category buttons container
const CardContainer = document.querySelector('.CardContainer')// card container
const AllProductsBtn = document.querySelector('.AllProductsBtn') //all products button
const container = document.querySelector('.container')
const searchInput = document.getElementById('searchInput')
const options = document.querySelector('.options')
const buyButtons = document.querySelectorAll('.buybtn');
const userName = document.querySelector('.userName')

const UserLogo = document.querySelector('.ri-user-line')
const UserLogo2 = document.querySelector('.ri-user-3-line')

const accClick = document.getElementById('acc')


const valuteChange = document.querySelector('.valute')

const card = document.querySelector('.card')


const CardContainer2 = document.querySelector('.CardContainer2')

const AlertYouArenotLogginned = document.querySelector('.alert-loginErrAdmin')














fetch('https://fakestoreapi.com/products') // all products comes from here
    .then(res => res.json())
    .then(json => getAllProducts(json))












fetch('https://fakestoreapi.com/products/categories') // product category comes from here
    .then(res => res.json())
    .then(json => CategotyButtons(json))





function CategotyButtons(btn) { // creating buttons for each category function
    btn.forEach(category => {

        let button = document.createElement('button') // creating button
        button.textContent = category //sets name
        button.className = ('buttons') // add class
        button.addEventListener('click', () => filterProducts(category)) // add listener on click to filter the items
        options.appendChild(button) // buttons go to btn container


    });

}



// fetch('https://67d01461823da0212a8481b7.mockapi.io/products')
// .then(res => res.json())
// .then(json => {
//     const SearchedProducts = json.filter(product => {
//         return product.Title.toLowerCase().includes(searchTerm)
//     })

//     getCards(SearchedProducts)
// });





 









    



function getAllProducts(card) { 
    
   
    CardContainer.innerHTML = '';




    
    card.forEach(product => { 
        CardContainer.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${product.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title-title">Title: ${product.title}</h5>
                <h5 class="card-title-price" id="price-${product.id}">Price: ${product.price} $</h5>
                <h5 class="card-title-rate">Rate: ${product.rating.rate} <i class="ri-star-line"></i></h5>
                <h5 class="card-title-category">Category: ${product.category}</h5>
                <p class="description">${product.description}</p>
                <a href="Product.html">
                    <button onclick="ProductPage(event)" class="buybtn">More Details</button>
                </a>
            </div>
            <div class="heart">
                <i class="ri-heart-add-2-line" onclick="heart(event)"></i>
              
                    <i onclick="cart(event)" class="ri-shopping-cart-2-fill"></i>
             
            </div>
        </div>`;


        

      
    });



   

    
    
    

   
    valuteChange.addEventListener('change', (e) => {
        let valute = e.target.value;

    
        card.forEach(product => {
            let UpdateValute;

            if (valute === '$') {
                UpdateValute = product.price * 1;
            } else if (valute === '€') {
                UpdateValute = product.price * 0.92;
            } else if (valute === '₾') {
                UpdateValute = product.price * 2.78;
            }

         
            const priceElement = document.getElementById(`price-${product.id}`);
            if (priceElement) {
                priceElement.textContent = `Price: ${UpdateValute.toFixed(2)} ${valute}`;
            }
        });
    });
}









function filterProducts(category) { // function for filter products by category

 



  




    fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => res.json())
        .then(json => {
            getAllProducts(json)


            document.querySelector('.sort').addEventListener('change', (e) => { // adds selector from html
                let sortOrder = e.target.value; // creating varieble for each change
                let sortedProducts; // varieble for products that are filtered
                if (sortOrder === 'price Up') {
                    sortedProducts = json.sort((a, b) => a.price - b.price) // if sortorder is that what is mark in '' sortedproducts will show us sort from json form a to b price (others with each meaning to)

                } else if (sortOrder === 'price down') {
                    sortedProducts = json.sort((a, b) => b.price - a.price)
                } else if (sortOrder === 'rate up') {
                    sortedProducts = json.sort((a, b) => a.rating.rate - b.rating.rate)
                } else if (sortOrder === 'rate down') {
                    sortedProducts = json.sort((a, b) => b.rating.rate - a.rating.rate)
                }


                getAllProducts(sortedProducts)
            })




        })
}

function GetAllProducts() {
    
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            getAllProducts(json)

            document.querySelector('.sort').addEventListener('change', (e) => {
                let sortOrder = e.target.value;
                let sortedProducts;
                if (sortOrder === 'price Up') {
                    sortedProducts = json.sort((a, b) => a.price - b.price)

                } else if (sortOrder === 'price down') {
                    sortedProducts = json.sort((a, b) => b.price - a.price)
                } else if (sortOrder === 'rate up') {
                    sortedProducts = json.sort((a, b) => a.rating.rate - b.rating.rate)
                } else if (sortOrder === 'rate down') {
                    sortedProducts = json.sort((a, b) => b.rating.rate - a.rating.rate)
                }


                getAllProducts(sortedProducts)
               
                

            })





        })
}






 function searchList() {

    const searchTerm = searchInput.value.toLowerCase(); // stores text of input



    
    


    fetch('https://fakestoreapi.com/products') // all products comes from here
    .then(res => res.json())
    .then(json => {
        const SearchedProducts = json.filter(product => { // making variable for filtered products
            return product.title.toLowerCase().includes(searchTerm) // if product title includes serch text return this product

            
        })

       

        getAllProducts(SearchedProducts)


        
 if (SearchedProducts.length ===0) {
    CardContainer.innerHTML = ` <div class="noProduct"> 
                                    <p class ="NoProduct_text"> Oops... we have not this product</p>
                                    <i class="ri-emotion-sad-line"></i>
                                    
                                    </div>`


    
 } else {
    getAllProducts(SearchedProducts)
 }
    })

 }

 function BurgerMenu() {
    CategoryButtons.classList.toggle('open') // switches class
    
 }





 function heart(event) {
    

   
    if(accClick.innerHTML == '' ) {
        AlertYouArenotLogginned.style.top = '2%'


        setInterval(() => {
            AlertYouArenotLogginned.style.top = '-100%'
        }, 4000);
    } else if(accClick.innerHTML.length !== 0) {

        event.target.classList.toggle('clicked');
    const productCard = event.target.closest('.card'); // Get the closest card to the heart icon
    const productTitle = productCard.querySelector('.card-title-title').textContent; // Get the product title
    const productPrice = productCard.querySelector('.card-title-price').textContent; // Get the product price
    const productImage = productCard.querySelector('.card-img-top').src; // Get the product image URL
    const productRate = productCard.querySelector('.card-title-rate').textContent; // Correct selector for rate
    const productCategory = productCard.querySelector('.card-title-category').textContent; // Correct selector for category

    // Create a product object
    const likedProduct = {
        title: productTitle,
        price: productPrice,
        image: productImage,
        rate: productRate,
        category: productCategory,
    };



        

        let likedProducts = JSON.parse(localStorage.getItem('likedProducts')) || []; // Get the liked products from local storage
    
    // Check if the product is already in the likedProducts array
    const isProductAlreadyLiked = likedProducts.some(product => product.title === likedProduct.title);

    if (isProductAlreadyLiked) {
        alert('This product is already in your liked products.');
    } else {
        if (event.target.classList.contains('clicked')) {
            likedProducts.push(likedProduct); // Add to liked products
        } else {
            likedProducts = likedProducts.filter(product => product.title !== likedProduct.title); // Remove from liked products
        }

        localStorage.setItem('likedProducts', JSON.stringify(likedProducts)); // Save to local storage
    }
    }

   

    
    

}



function ProductPage(event) {

    const productCard = event.target.closest('.card'); 
    const productTitle = productCard.querySelector('.card-title-title').textContent;
    const productPrice = productCard.querySelector('.card-title-price').textContent;
    const productImage = productCard.querySelector('.card-img-top').src;
    const productRate = productCard.querySelector('.card-title-rate').textContent;
    const productCategory = productCard.querySelector('.card-title-category').textContent;
    const productDescription = productCard.querySelector('.description').textContent;


    const clickedProduct = {
        title: productTitle,
        price: productPrice,
        image: productImage,
        rate: productRate,
        category: productCategory,
        description: productDescription,
    };

   
    let clickedProducts = JSON.parse(localStorage.getItem('clickedProducts')) || [];

  
    clickedProducts.push(clickedProduct);

    


    localStorage.setItem('clickedProducts', JSON.stringify(clickedProducts));

 
}




function cart(event) {

    if(accClick.innerHTML == '' ) {
        AlertYouArenotLogginned.style.top = '2%'


        setInterval(() => {
            AlertYouArenotLogginned.style.top = '-100%'
        }, 4000);
    } else if(accClick.innerHTML.length !== 0) {

       location.replace('cart.html')

        const productCard = event.target.closest('.card');
        const productTitle = productCard.querySelector('.card-title-title').textContent;
        const productPrice = productCard.querySelector('.card-title-price').textContent;
        const productImage = productCard.querySelector('.card-img-top').src;
        const productCategory = productCard.querySelector('.card-title-category').textContent;
    
        const cartProduct = {
            title: productTitle,
            price: productPrice,
            image: productImage,
            category: productCategory,
            title: productTitle,
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



let body = document.querySelector('body');
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











function cartOnclick() {
    if(accClick.innerHTML == '' ) {
        AlertYouArenotLogginned.style.top = '2%'


        setInterval(() => {
            AlertYouArenotLogginned.style.top = '-100%'
        }, 4000);
    } else if(accClick.innerHTML.length !== 0) {

       window.open('cart.html')
       window.close('index.html')

    }
}


function heartRed() {
    if(accClick.innerHTML == '' ) {
        AlertYouArenotLogginned.style.top = '2%'


        setInterval(() => {
            AlertYouArenotLogginned.style.top = '-100%'
        }, 4000);
    } else if(accClick.innerHTML.length !== 0) {

       window.open('liked-product.html')
       window.close('index.html')


    }
}















