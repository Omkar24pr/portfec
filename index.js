const list=document.querySelector(".links");
const lines=document.querySelector(".fa-bars");
const cross=document.querySelector(".fa-xmark");

lines.addEventListener("click", ()=>{
      lines.style.display="none";
      cross.style.display="block";
      list.style.display="flex";
});

cross.addEventListener("click", ()=>{
    lines.style.display="block";
    cross.style.display="none";
    list.style.display="none";
});

const width=screen.width;


function markVisited() {
    var button = document.getElementById("visitButton");
    button.classList.add("visited");
    button.innerText = "Visited";
}
