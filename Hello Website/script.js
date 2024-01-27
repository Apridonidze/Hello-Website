let lightBtn = document.querySelector("#lightBtn");
let darkBtn = document.querySelector("#darkBtn");

lightBtn.addEventListener("click",() => {
    lightBtn.style.display = 'none';
    darkBtn.style.display = "flex";
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white"
    document.querySelector(".bar").style.borderBottom = "5px solid white";
    document.querySelector(".bar").style.backgroundColor= "black";
    document.querySelector(".logo2").style.backgroundColor = "white";
    document.querySelector(".logo2").style.color = "black";
    document.querySelector("footer").style.borderTop = "5px solid white";
    document.querySelector(".bar-toggle").style.backgroundColor = "black";
    document.querySelector(".bar-toggle").style.color = "white"
    document.querySelector(".toggle-footer").style.backgroundColor = "black";
    document.querySelector(".toggle-footer").style.borderTop = "5px solid white";
});

darkBtn.addEventListener("click",() => {
    lightBtn.style.display = 'flex';
    darkBtn.style.display = "none";
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("body").style.color = "black"
    document.querySelector(".bar").style.borderBottom = "5px solid black";
    document.querySelector(".bar").style.backgroundColor= "white";
    document.getElementsByName("a").style.color = "black";
    document.querySelector("footer").style.borderTop = "5px solid black";
    document.getElementsByTagName("a").style.color = "white";
    document.querySelector(".bar-toggle").style.backgroundColor = "white";
    document.querySelector(".bar-toggle").style.color = "black"
    document.querySelector(".toggle-footer").style.backgroundColor = "white";
    document.querySelector(".toggle-footer").style.borderTop = "5px solid black";
});


let closeBtn = document.querySelector("#closeBtn");
closeBtn.addEventListener("click",() => {
    toggleContainer.style.display = "none";
    toggleDiv.style.display = "none";
});

let hamburgBtn = document.querySelector(".bar-toggle-hamburg");
let toggleContainer = document.querySelector(".toggle-container");
let toggleDiv = document.querySelector(".bar-toggle");

hamburgBtn.addEventListener("click", () => {
    toggleContainer.style.display = "flex"
    toggleDiv.style.display = "flex";
});

toggleContainer.addEventListener("click",() => {
    toggleDiv.style.display = "none";
    toggleContainer.style.display = "none";
});