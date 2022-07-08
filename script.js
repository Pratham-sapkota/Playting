
const validate=(event)=>{
   
    const mail=document.querySelector('.email_add').value
    console.log(mail)
    var regx=/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
    if(!regx.test(mail)){
        
    alert("invalid email id , please enter a valid ID")

    }
   
}

const button=document.querySelector('button')
button.addEventListener('click',validate,false)
