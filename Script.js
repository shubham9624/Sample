let pwd=false;
let p=document.getElementById("password");
var h=document.getElementById("head");
let nameInput = document.getElementById("name");
h.addEventListener("click",()=>{
    alert("You clicked on the header");
});
var b=document.getElementById("button");
let bod=document.body;
let wh=document.querySelectorAll(".para");
b.addEventListener("click",()=>{
//    if(pwd===false)
//     {
//         pwd=true;
//         p.setAttribute("type","text");
//         b.innerHTML="hide";
//     }
//     else{
//         pwd=false;
//         p.setAttribute("type","password");
//         b.textContent="show";
//     }
  if(pwd===false)
    {
        pwd=true;
        bod.style.backgroundColor="black";
        for(let i of wh)
            {
                i.style.color="white";
            }
            p.style.color="white";
            nameInput.style.color="white";
            b.style.backgroundColor="black";
    }
    else{
        pwd=false;
        bod.style.backgroundColor="white";
        for(let i of wh)
            {
                i.style.color="black";
            }
            p.style.color="black";
            nameInput.style.color="black";
            b.style.backgroundColor="white";
    }
});
