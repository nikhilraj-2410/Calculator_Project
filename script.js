
// how calculator works its logic can only written in javascript only 
// so, learning javascript is necessary without this all learning will be vain

let string ="";
let buttons =document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{
        button.addEventListener("click",(event)=>{
        if(event.target.innerHTML== "="){
            string=eval(string);
            document.querySelector("input").value=string;

        }
        else if(event.target.innerHTML== "C"){
              string =" ";
              document.querySelector("input").value=string;
        }
        else{

           console.log(event.target);
        
           string = string + event.target.innerHTML;
           document.querySelector("input").value=string;

        }
       
        
    })
})