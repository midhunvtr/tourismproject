


let email=document.getElementById("email")
let pwd=document.getElementById("pwd")
let pwd1=document.getElementById("pwd1")
function validate(){
  if( email.trim()==""||pwd.value.trim()==""|| pwd1.value.trim()==""){
 alert("fields cannot be empty") 
 return false; 
  }
  else{
    return true;
  }
}