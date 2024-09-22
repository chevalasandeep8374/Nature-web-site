function loginpage()
{
  let email,pwd;
  email=document.getElementById('emailbox').value;
  pwd=document.getElementById('password').value;
  if(email == "" || email == undefined || email == null)
     alert('Please enter email id and password');
    else
   {
    if(email == "chevalasandeep@gmail.com" && pwd == "123456")
     alert('correct');
    else
     alert('incorrect');
   }
 
  
}
let passwordBox=document.querySelector('#password');
let checkBox=document.querySelector('#checkbox');
checkBox.addEventListener('change',function(){
  let textAttribute=passwordBox.getAttribute('type');//getAttribute => it is used to get the attribute from the element/tag
  if(textAttribute === 'password'){
   passwordBox.setAttribute('type','text');//setAttribute => it is used to change the attribute from the element/tag
  }
  else{
   passwordBox.setAttribute('type','password');
  }
});