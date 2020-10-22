const logo = document.getElementById("logo");
const btn = document.getElementById("btn");


logo.addEventListener("click", function(e) {
    console.log("Click");
    e.preventDefault();
});

btn.addEventListener("click", function(){
    window.location.href = "./";
});

const hamDiv = document.getElementById("hamicon-div")

let k = 0;
document.getElementById("hamicon").addEventListener("click",()=>{
    if(k % 2 == 0) {
        hamDiv.style.opacity = "1";
        k++;
    }
    else {
        hamDiv.style.opacity = "0";
        k++;
    }
});