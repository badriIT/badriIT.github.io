const singInClear = document.querySelector('.singIn-div')
const singInUp = document.querySelector('.singIn-up')

const passwordLogin = document.querySelector('.password')
const usernameLogin = document.querySelector('.username')
const emailLogin = document.querySelector('.email')

const alerts = document.querySelector('.alert-exits')
const alertsGreen = document.querySelector('.alert-loginSec')


const Name = document.getElementById('name')
const Surname = document.getElementById('surname')
const Username = document.getElementById('username2')
const Email = document.getElementById('email')
const Password = document.getElementById('password2')

const alertAccCreate = document.querySelector('.alert-AccCreate')
// inputs for register

const alertloginSecAdmin = document.querySelector('.alert-loginSecAdmin')
const alertloginErrAdmin = document.querySelector('.alert-loginErrAdmin')

const saveUserBTN = document.querySelector('.saveUser')

function saveUserInfo(event) {

  if(Password.value.trim() !== '') {
    Password.style.borderColor = 'rgb(0, 255, 0)'
   } else if(!Password.value.trim()) {
     Password.style.borderColor = 'red'
    }


    if(Name.value.trim() !== '') {
            Name.style.borderColor = 'rgb(0, 255, 0)'
     } else  if(!Name.value.trim()) {
      Name.style.borderColor = 'red'
     }
     

     if(Surname.value.trim() !== '') {
      Surname.style.borderColor = 'rgb(0, 255, 0)'
      } else if(!Surname.value.trim()) {
        Surname.style.borderColor = 'red'
        }

        if(Username.value.trim() !== '') {
          Username.style.borderColor = 'rgb(0, 255, 0)'
        } else if(!Username.value.trim()) {
          Username.style.borderColor = 'red'
        }  


        if(Email.value.trim() !== '') {
          Email.style.borderColor = 'rgb(0, 255, 0)'
         } else if(!Email.value.trim() ) {
          Email.style.borderColor = 'red'
         }

     
        
  let userInfo = {
    Name: Name.value,
    Surname: Surname.value,
    Username: Username.value,
    Email: Email.value,
    Password: Password.value,
  };

 
  if (!Email.value.includes('@')) {
    inputGetRed()
  } else if (Email.value.includes('@')) {
    inputGetGreen() 
  } 

  if (Name.value.trim() !== '' && Surname.value.trim() !== '' && Username.value.trim() !== '' && Email.value.trim() !== '' && Password.value.trim() !== '') {

 
   
   
    
    if (Username.value.trim().toUpperCase() !== 'ADMIN') {
        singInClear.style.display = 'block';
        singInUp.style.display = 'none';
    }

    event.preventDefault(); 
} 



if (!Name.value  && !Surname.value  && !Username.value   &&  !Email.value   &&  !Password.value  ) {
  let inavlidUsers = JSON.parse(localStorage.getItem('inavlidUsers')) || [];



  inavlidUsers.push(userInfo);
  
  
  
  
  
} else if(!Name.value) {
  let inavlidUsers = JSON.parse(localStorage.getItem('inavlidUsers')) || [];

  
  inavlidUsers.push(userInfo);
}

else if(!Surname.value) {
  let inavlidUsers = JSON.parse(localStorage.getItem('inavlidUsers')) || [];

  
  inavlidUsers.push(userInfo);
}

else if(!Username.value) {
  let inavlidUsers = JSON.parse(localStorage.getItem('inavlidUsers')) || [];

  

  inavlidUsers.push(userInfo);
}  

else if(Username.value === 'ADMIN') {
  let inavlidUsers = JSON.parse(localStorage.getItem('inavlidUsers')) || [];

  alertloginErrAdmin.style.top = '2%'
  setInterval(() => {
    alertloginErrAdmin.style.top = '-100%'
  }, 3000);

  inavlidUsers.push(userInfo);
} 

else if(!Email.value) {
  let inavlidUsers = JSON.parse(localStorage.getItem('inavlidUsers')) || [];

  
  inavlidUsers.push(userInfo);
}

else if(!Password.value) {
  let inavlidUsers = JSON.parse(localStorage.getItem('inavlidUsers')) || [];

  
  inavlidUsers.push(userInfo);
} else  {




  let userInfos = JSON.parse(localStorage.getItem('userInfo')) || [];

  
  userInfos.push(userInfo);
  
  
  
  
  localStorage.setItem('userInfo', JSON.stringify(userInfos))
}
 


;




  



}




//





function singUp() {
  singInClear.style.display ='none'
  singInUp.style.display = 'block'

  alerts.style.display = 'none'
}

function singIn() {
 

  Name.value = ''
  Surname.value = ''
  Username.value = ''  
  Email.value = ''  
  Password.value = ''

  Name.style.borderColor = ' #FFF'
  Surname.style.borderColor = ' #FFF'
  Username.style.borderColor = ' #FFF'
  Email.style.borderColor = ' #FFF'
  Password.style.borderColor = ' #FFF'
      

 
      

     singInClear.style.display ='block'
  singInUp.style.display = 'none'
}



function login() {
  event.preventDefault();

  let userInfosSingIn = {
    Surname: usernameLogin.value,
    Password: passwordLogin.value,
    Email: emailLogin.value
    
  }

 let  userInfo = {
    Name: Name.value,
    Surname: Surname.value,
    Username: Username.value,
    Email: Email.value,
    Password: Password.value,
  }
  
  let userInfos = JSON.parse(localStorage.getItem('userInfo')) || [];

  let findUser = userInfos.find(user => user.Username === usernameLogin.value && user.Password === passwordLogin.value && user.Email === emailLogin.value )

if (findUser) {
  alertsGreen.style.top = '2%'
       alerts.style.display = 'none'

       setInterval(() => {
        alertsGreen.style.top = '-100%'
      }, 3000);
       setInterval(() => {
        window.open('index.html')
       }, 2000);

       let userInfosSingInStorage = JSON.parse(localStorage.getItem('userInfosSingIn')) || [];

       userInfosSingInStorage.push(userInfosSingIn)

       localStorage.setItem('userInfosSingIn', JSON.stringify(userInfosSingInStorage))
            
  } else {
    
    alerts.style.top = '2%'

    setInterval(() => {
        alerts.style.top = '-100%'
    }, 4000);
  }


  
if(passwordLogin.value === 'admin123' && usernameLogin.value ==='ADMIN' && emailLogin.value === 'admin@admin' ) {

  let AdminInfos = {
     Password: passwordLogin.value,
     Surname: usernameLogin.value,
     Email: emailLogin.value,
  }

 
 
  let userInfosSingInStorage = JSON.parse(localStorage.getItem('userInfosSingIn')) || [];

  userInfosSingInStorage.push(AdminInfos)

  localStorage.setItem('userInfosSingIn', JSON.stringify(userInfosSingInStorage))

   alerts.style.display = 'none'
   setInterval(() => {
    window.open('admin.html')
   }, 2000);
  
  alertloginSecAdmin.style.top = '2%'

  

 
}
}




function inputGetRed() {
  Email.style.borderColor = 'red'
}

function inputGetGreen() {
    Email.style.borderColor = 'rgb(0, 255, 0)'
}

