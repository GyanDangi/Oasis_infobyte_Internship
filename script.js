let buttons=document.querySelector('.buttons');
let btn=document.querySelectorAll('span');
let value=document.getElementById('value');
let togglebtn=document.querySelector('.togglebtn');
let body=document.querySelector('body');

for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener("click",function(){

        if(this.innerHTML=="="){
            value.innerHTML=parseFloat(eval(value.innerHTML)).toFixed(2);
        }
        else{
            if(this.innerHTML=="Clear"){
                value.innerHTML="";
            }
            else{
                value.innerHTML +=this.innerHTML;
            }
        }
      }) 
}

togglebtn.onclick=function(){
    body.classList.toggle('dark');
}