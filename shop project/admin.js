const ProductTitle = document.querySelector('.Product-name-inp')
const ProductDescription = document.querySelector('.Description-name')
const ProductPrice = document.querySelector('.price-inp')
const ProductRate = document.querySelector('.Rate-inp')
const ProductImage = document.querySelector('.image-inp')
const ProductCategory = document.querySelector('.category-selector')

const AddProductBtn = document.querySelector('.Add-Product')


const productContainer = document.querySelector('.productContainer')

const PhotoContainer = document.querySelector('.photo_container')

const AlertProductAdded = document.querySelector('.alert-ProductAdded')

AddProductBtn.addEventListener('click', function() {
    const productInformation = {
        Title: ProductTitle.value,
        Description: ProductDescription.value,
        ProductPrice: ProductPrice.value + '$',
        ProductRate: ProductRate.value,
        ProductCategory: ProductCategory.value, 
        ProductImage: ProductImage.value
      
        
    }

 
    if (ProductTitle.value != 0 && ProductDescription.value != 0 && ProductPrice.value != 0 && ProductRate.value != 0 &&  ProductCategory.value != 0 && ProductImage.value != 0   ) {
        postItem(productInformation)
        console.log(productInformation);
        AlertProductAdded.style.top = '2%'

        setInterval(() => {
             AlertProductAdded.style.top = '-100%'
        }, 3000);
        
    } else if (ProductTitle.value == '') {
        ProductTitle.style.borderColor = 'red'
        ProductTitle.placeholder = 'Enter Product Title'
        ProductTitle.placeholder.color = 'red'

setTimeout(() => {
    ProductTitle.placeholder = ''  
     ProductTitle.style.borderColor = ''
}, 4000);


        
    } 

    else if ( ProductDescription.value == ''    ) {
        ProductDescription.style.borderColor = 'red'
        ProductDescription.placeholder = 'Enter Product Description!'
        ProductDescription.placeholder.color = 'red'

setTimeout(() => {
    ProductDescription.placeholder = ''  
     ProductDescription.style.borderColor = ''
}, 4000);
        
    }  

    else if ( ProductPrice.value == ''    ) {
        ProductPrice.style.borderColor = 'red'
        ProductPrice.placeholder = 'Enter Product Price!'
        ProductPrice.placeholder.color = 'red'

setTimeout(() => {
    ProductPrice.placeholder = ''  
    ProductPrice.style.borderColor = ''
}, 4000);
        
    } 


    else if ( ProductRate.value == ''    ) {
        ProductRate.style.borderColor = 'red'
        ProductRate.placeholder = 'Enter Base Product Rate!'
        ProductRate.placeholder.color = 'red'

setTimeout(() => {
    ProductRate.placeholder = ''  
    ProductRate.style.borderColor = ''
}, 4000);
         
    }  
 

    else if ( ProductCategory.value == ''    ) {
        ProductCategory.style.borderColor = 'red'
        
        ProductCategory.placeholder.color = 'red'

setTimeout(() => {
    ProductCategory.placeholder = ''  
    ProductCategory.style.borderColor = ''
}, 4000);
         
    } 


    
    
   
    else if ( ProductImage.value == ''    ) {
        ProductImage.style.borderColor = 'red'
         ProductPrice.placeholder = 'enter image URL'
        ProductImage.placeholder.color = 'red'

setTimeout(() => {
   
    ProductImage.style.borderColor = ''
}, 4000);
         
    } 
   

    
})



let url = 'https://67d01461823da0212a8481b7.mockapi.io/products'

async function postItem(product) {
    try {
        let res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(product)
        })
        
        if (!res.ok) {
            throw new Error('failed to fetch')
        }

        
    } catch (error) {
        console.error(error)
    }
}




function logOut() {
    localStorage.removeItem('userInfosSingIn')
}
    