let menu = document.querySelector(".menu");
let span1 = document.querySelector(".span-1");
let span2 = document.querySelector(".span-2");
let span3 = document.querySelector(".span-3");
let links = document.querySelector("nav ul");
let blu = document.querySelector(".op");
let pricediv = document.getElementById("zaza")
let pricespan = document.querySelector(".btn span");



menu.onclick = () =>{
    span2.classList.toggle("hide")
    span2.classList.toggle("vis")
    span1.classList.toggle("cen")
    span3.classList.toggle("cen")
    span1.classList.toggle("rot")
    span3.classList.toggle("rot-")
    span1.classList.toggle("def")
    span3.classList.toggle("def")
    links.classList.toggle("exp")
    links.classList.toggle("shr")
    blu.classList.toggle("opacity")
    blu.classList.toggle("bl")
}

pricediv.onclick = () =>{
    pricespan.classList.toggle("right")
    pricediv.classList.toggle("bg-white")
    pricediv.classList.toggle("violet")
}