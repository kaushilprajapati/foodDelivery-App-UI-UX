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
    var ele = document.getElementsByName('gender');
           
    var dob = document.getElementById('dob');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    
    if(name.value.length == 0){
        alert('Please fill in Name');
    }else if(pw.value.length == 0){
        alert('Please fill in password');
    }else if(username.value.length == 0){
        alert('Please fill in username');
    }
    else if(pw.value.length > 8){
        alert('Maximum of 8 digits for password');
    }else if(pw.value.length < 6){
        alert('Minimum of 6 digits for password');
    }
    else if(!pw.value.match(numbers)){
        alert('please add 1 number in the password');
    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter in the password');
    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lowercase letter in the password');
    }else if(pw.value != cpw.value){
        alert('Confirm password and password has to be same');
    }else if(/^[a-zA-Z ]+$/.test(name.value)!=true){
        alert('Name is not valid it should not include numbers');
    }
    else{
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
        {
        localStorage.setItem('name', name.value);
        localStorage.setItem('username', username.value);
        localStorage.setItem('pw', pw.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('dob', dob.value);
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked)
                    localStorage.setItem('gender', ele[i].value);
        }
        alert('Your account has been created');
        }
    else{
      alert("You have entered an invalid email address!")
        }
    }
        }   

function clearAll()
{
   document.getElementById("signup").reset();
}