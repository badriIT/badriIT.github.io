let userInfosSingInStorage = JSON.parse(localStorage.getItem('userInfosSingIn')) || [];
const Name = document.querySelector('.Name')
const NameOfUser = document.querySelector('.NameOfUser')
const Gmail = document.querySelector('.Gmail')
const Gmail2 = document.querySelector('.Gmail2')

const OrderHistory = document.querySelector('.OrderHistory')


function goback() {
    localStorage.removeItem('userInfosSingIn')
}

userInfosSingInStorage.forEach(el => {
    NameOfUser.innerHTML = `${el.Surname}`
    Name.innerHTML = `Name: ${el.Surname}`
    Gmail.innerHTML = `Gmail: ${el.Email}`
    Gmail2.innerHTML= `${el.Email}`
});

OrderHistory.addEventListener('click', function() {
    window.open('OrderHistory.html')
})