const UserLogo = document.querySelector('.ri-user-line')
const UserLogo2 = document.querySelector('.ri-user-3-line')

const accClick = document.getElementById('acc')


const valuteChange = document.querySelector('.valute')

const card = document.querySelector('.card')




















function displayLikedProducts() {
    const likedProducts = JSON.parse(localStorage.getItem('likedProducts')) || []; // Get liked products from local storage
    const likedProductsH1 = document.querySelector('.likedProducts');
    likedProductsH1.textContent = 'Your Liked Products: ' + likedProducts.length;
    const likedProductsPriceContainer = document.querySelector('.likedProductsPriceContainer');

    // Calculate the total price
    const totalPrice = likedProducts.reduce((total, product) => {
        const priceString = product.price.replace(/[^0-9.-]+/g, ''); 
        const price = parseFloat(priceString);

        // If price is NaN 
        if (isNaN(price)) {
            return total; 
        }

        return price + total;
    }, 0);

   
    console.log(totalPrice);

    // container where liked products will be displayed
    const likedProductsContainer = document.querySelector('.CardContainer');
    likedProductsContainer.innerHTML = ''; // Clear the container before adding new products

    if (likedProducts.length === 0) {
        likedProductsContainer.innerHTML = '<p class="noProducts">No liked products yet!</p>';
    } else {
        // Add each liked product card
        likedProducts.forEach((product, index) => {
            likedProductsContainer.innerHTML += `
                <div class="card" style="width: 18rem;">
                    <img src="${product.image}" class="card-img-top" alt="Product Image">
                    <div class="card-body">
                        <h5 class="card-title-title"> ${product.title}</h5>
                        <h5 class="card-title-price"> ${product.price}</h5>
                        <h5 class="card-title-rate"> ${product.rate}</h5> <!-- rate element -->
                        <h5 class="card-title-category"> ${product.category}</h5> <!-- category element -->
                    </div>
                    <button class="delBtn" onclick="deleteItem(${index})">Remove From Liked Products</button>
                </div>
            `;
        });
    }

    // Update the total price, set it to $0 if there are no liked products
    likedProductsPriceContainer.innerHTML = `
        <div class="total-price">
            <h3>Total Price: $${likedProducts.length > 0 ? totalPrice.toFixed(2) : '0.00'}</h3>
        </div>
    `;
}

function deleteItem(index) {
    const likedProducts = JSON.parse(localStorage.getItem('likedProducts')) || [];

    likedProducts.splice(index, 1); // Remove the product at the given index

    // Update localStorage
    localStorage.setItem('likedProducts', JSON.stringify(likedProducts));

   
    displayLikedProducts();
}


displayLikedProducts();


let body = document.querySelector('body')


if (localStorage.getItem('colorTheme') === 'dark') {
    body.classList.add('darktheme');
    
} else {
   
}





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