let menu = document.querySelector("#barcontainer");
let navbar = document.querySelector(".navbar");

menu.onclick = () =>{
  navbar.classList.toggle("change")
}

function store(){
    var name = document.getElementById('name');
    var username = document.getElementById('username');
    var email = document.getElementById('email');
    var pw = document.getElementById('pw');
    var cpw = document.getElementById('cpw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(username.value.length == 0){
        alert('Please fill in username');
    }else if(pw.value.length == 0){
        alert('Please fill in password');
    }else if(pw.value.length > 8){
        alert('Maximum of 8 digits for password');
    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');
    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');
    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lowercase letter');
    }else if(pw.value != cpw.value){
        alert('Confirm password and password has to be same');
    }
    else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('username', username.value);
        localStorage.setItem('pw', pw.value);
        localStorage.setItem('email', email.value);
        alert('Your account has been created');
    }
}

function clearAll(){
   document.getElementById("signup").reset();
}