let h4 = document.getElementById("h4");
let btn = document.getElementById("btn");

btn.addEventListener("mouseover",()=>{
    h4.style.color = "black";
})
btn.addEventListener("mouseout",()=>{
    h4.style.color = "white";
})