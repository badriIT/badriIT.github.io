let cashOutProducts = JSON.parse(localStorage.getItem('cashOutProducts')) || [];
const productsForBying = document.querySelector('.productsForBying');
const totalprice = document.querySelector('.totalprice');
const checkOutOk = document.querySelector('.checkOutOk')
const alertRed = document.querySelector('.alert-exits')

const purchasebtn = document.querySelector('.purchase--btn')


const alertloginSec = document.querySelector('.alert-loginSec')
const accClick = document.getElementById('acc')

const Name = document.getElementById('password_field1')
const CardNumber = document.getElementById('password_field2')
const date = document.getElementById('password_field3')
const CVV = document.getElementById('password_field4')






let grandTotal = 0;


productsForBying.innerHTML = '';

cashOutProducts.forEach(product => {
   
    const productTotalPrice = parseFloat(product.totalPrice); 
    grandTotal += productTotalPrice;


    productsForBying.innerHTML += `
    <div class="Products">
        <img class="CashOutImages" src="${product.image}" alt="">
        <p class="quantity">X ${product.quantity}</p>
    </div>
    `;
});

localStorage.setItem('grandTotal', grandTotal.toFixed(2));


totalprice.innerHTML = `Total: $${grandTotal.toFixed(2)}`;


 



purchasebtn.addEventListener('click', function (){
    event.preventDefault()

   


    if(!Name.value) {
        alertRed.style.top = '2%'

        setInterval(() => {
            alertRed.style.top = '-100%'
      }, 4000);
    }

     else if (!CardNumber.value) {
        alertRed.style.top = '2%'

        setInterval(() => {
            alertRed.style.top = '-100%'
      }, 4000);
    }

   else if(!date.value) {
        alertRed.style.top = '2%'

        setInterval(() => {
            alertRed.style.top = '-100%'
      }, 4000);
    }

    if(!CVV.value) {
        alertRed.style.top = '2%'

        setInterval(() => {
            alertRed.style.top = '-100%'
      }, 4000);
    } else {

        

        let orderedProducts = JSON.parse(localStorage.getItem('orderedProducts')) || [];









        orderedProducts.push(cashOutProducts)

       
        

        localStorage.setItem('orderedProducts', JSON.stringify(orderedProducts))


     
        alertloginSec.style.top = '2%'
        setInterval(() => {
          localStorage.removeItem('cashOutProducts')
          localStorage.removeItem('cartProducts')
            window.close('cashOut.html')
            window.open('index.html')

            
             
       
        }, 2000);
      
    }
})


window.addEventListener('beforeunload', function() {
    this.localStorage.removeItem('cashOutProducts')
})




const moon = document.querySelector('.ri-contrast-2-line');
const sun = document.querySelector('.ri-sun-line');

let body = document.querySelector('body')



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

