  let record={}
  let nameregex=/^[a-zA-Z ]+$/;
  let emailregex= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 let  mobileregex=/^\d{10}$/; //^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$
 
document.addEventListener("DOMContentLoaded",()=>{

const form=document.querySelector("#form-register");
const error=document.querySelector("#error");

form.addEventListener("submit",(e)=>{
    let gender=document.querySelector("input[name='gender']:checked");
    let term=document.querySelector("input[name='term']");
    let file=document.querySelector("input[name='image']").files[0];
   // e.preventDefault();
   if(record.fullname==undefined || record.fullname==""){
       error.innerText="Fullname is required";
       e.preventDefault();
       return false;
   }
   else if(!(nameregex.test(String(record.fullname)))){
   error.innerText="Fullname should be more than 3 characters and should not contain numbers";
   e.preventDefault();
   return false;
   }
   //email 
   if(record.email==undefined || record.email==""){
       error.innerText="Email is required";
       e.preventDefault();
       return false;
   }
   else if(!(emailregex.test(String(record.email)))){
       error.innerText="Email is not valid";
       e.preventDefault();
       return false;
   }
   //contact
   if(record.contact==undefined || record.contact==""){
       error.innerText="Contact is required";
       e.preventDefault();
       return false;
   }else if(!(mobileregex.test(record.contact))){
         error.innerText="Contact is not valid";
         e.preventDefault();
         return false;
   }
   //gender validation 
   if(!gender)
   {
    error.innerText="Select the Gender"
    e.preventDefault()
    return false;
   }

  //country
  
  if(!record.country)
  {
    error.innerText="Select Your Country";
    e.preventDefault();
    return false;
    
  }
  //term
  if(!term.checked)
  {
    error.innerText="Please Click the Terms"
    e.preventDefault();
    return false;
  }
  //upload 
  let filetypes=["image/png","image/jpeg","image/jpg"]
  let max=2*1024*1024;//2mb
  if(!file)
  {
    error.innerHTML="Upload a image"
    e.preventDefault();
    return false;
  }
  else if(!filetypes.includes(file.type)){
    error.innerHTML="Upload a image type png.jpeg,jpg"
    e.preventDefault();
    return false;
  }else if(file.size>max)
  {
    error.innerHTML="Upload a image size should below 2MB"
    e.preventDefault();
    return false;
  }
return true;
})
  
})
  
function onChangeValue(e){
   record={...record,[e.target.name]:e.target.value}
   console.log(record)
  }