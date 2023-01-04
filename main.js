
const form=document.getElementById('form');
const names=document.getElementById('name');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');


form.addEventListener('submit',(e=>{
    e.preventDefault();
    checkInput();
}))


function checkInput(){
   const nameValue= names.value.trim();
   const emailValue=email.value.trim();
   const passwordValue=password.value.trim();
  
   if(nameValue===""){
    seterror(names,"please fill the name")
   }
   else{
    setsuccess(names)
   }

   if(emailValue===""){
    seterror(email,"please fill the email")
   }
   else{
    setsuccess(email)
   }

   if(passwordValue===""){
    seterror(password,"please fill the password")
   }
   else{
    setsuccess(password)
   }

  

   function seterror(input,message){
     const formControl= input.parentElement;
     const small=formControl.querySelector('small');
     formControl.className='form-element error';
     small.innerText=message;
   }
   
   function setsuccess(input){
    const formControl= input.parentElement;
    const small=formControl.querySelector('small');
    formControl.className='form-element success';
  }
  
}