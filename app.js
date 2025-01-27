let string = "";
let buttons = document.getElementsByTagName("button"); //buttons nodelist
let display = document.querySelector(".screen");

let arr = Array.from(buttons); // button array
arr.forEach((button) => {
    button.addEventListener("click",()=>{
        if(button.innerText === "="){
            string = eval(string) + "";
            if(string.includes(".")) string = parseFloat(string).toFixed(3); // upto 3 decimal places in case of fractional numbers
            display.value = string; // show on screen
        }
        else if(button.innerText === "AC"){
            string = "";
            display.value = string;
        }
        else if(button.innerText === "CE"){
            let l = string.length;
            string = string.slice(0,l-1);
            display.value = string;
        }
        else{
            string += button.innerText;
            display.value = string;
        }
    })
})