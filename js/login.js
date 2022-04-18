let menu = document.querySelector("#barcontainer");
let navbar = document.querySelector(".navbar");

menu.onclick = () =>{
  navbar.classList.toggle("change")
}
function check(){
    var storedName = localStorage.getItem('username');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    if(userName.value.length == 0){
        alert('Please fill in username');
    }else if(userPw.value.length == 0){
        alert('Please fill in password');
    }
    else if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
    }else{
        alert('Error on login');
    }
}