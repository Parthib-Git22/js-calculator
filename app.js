let string = "";
let buttons = document.getElementsByTagName("button"); //buttons nodelist
let display = document.querySelector(".screen");

// const checkLength = (str)=>{
//     if(str.length > 15){
//         display.style.fontSize = "3.3rem";
//         display.value = "max limit";
//         string = "";
//     }
//     else if(str.length > 12){
//         display.style.fontSize = "2.7rem";
//     }else{
//         display.style.fontSize = "3.3rem";
//     }
// }

let arr = Array.from(buttons); // button array
arr.forEach((button) => {
    button.addEventListener("click",()=>{
        if(button.innerText === "="){
            string = eval(string) + "";
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
        // console.log(string);
        // checkLength(string);
    })
})