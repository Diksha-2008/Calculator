console.log("JavaScript is working");
let string = "";
let buttons = document.querySelectorAll("button");
Array.from(buttons).forEach((button)=>{
       button.addEventListener("click",(event)=>{
        if(event.target.innerHTML == '='){
            string = eval(string);
            document.querySelector("input").value = string;
        }
        else if(event.target.innerHTML == 'AC' || event.target.innerHTML == 'C'){
            string = "";
            document.querySelector("input").value = string;
        }
        else{
            string += event.target.innerHTML;
            document.querySelector("input").value = string;
        }
       })
})
