let menu = document.querySelector("#barcontainer");
let navbar = document.querySelector(".navbar");

menu.onclick = () =>{
  navbar.classList.toggle("change")
}

function order(){
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var number = document.getElementById('number');
    var food = document.getElementById('foodname');
    var address = document.getElementById('address');

    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
        if(/^[0-9]{10}$/.test(number.value)){
            if(/^[a-zA-Z ]+$/.test(name.value)){
                alert('order has been placed');
            }
        }
        else{
            alert('number or name is incorrect, please re-enter');
        } 
    }
    else{
        alert('invalid email id please re-enter a valid one');
    }
}