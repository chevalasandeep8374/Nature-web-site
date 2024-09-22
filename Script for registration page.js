function loginpage()
{
  let email,pwd;
  email=document.getElementById('emailbox').value;
  pwd=document.getElementById('pwdbox').value;
  if(email == "" || email == undefined || email == null)
  alert('Please enter full details');
  else
  alert('Login Sucessfully');
  
}

let registrationForm=document.querySelector('#registration-form');
registrationForm.addEventListener('submit',function(){
  validationForm();
})

let validationForm = function(){
  checkuserName();
}

let checkuserName = function(){
  let inputEl = document.querySelector('#userName');
  let inputErrorEl = document.querySelector('#userNameError');
  let regEl = /^[a-zA-Z0-9]{4,10}$/;
  if(regEl.test(inputEl.value)){
    valid(inputEl,inputErrorEl);
  }
  else{
    invalid(inputEl,inputErrorEl);
  }
}

let valid = function(inputEl,inputErrorEl){
inputEl.classlist
}