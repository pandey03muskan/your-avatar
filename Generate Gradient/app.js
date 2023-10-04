let first=document.querySelector(".first");
let second=document.querySelector(".second");
let body=document.querySelector("body");
let btn=document.querySelector("button");
btn.addEventListener('click',function(){
    color= 
            "linear-gradient(to right, " 
            + first.value 
            + ", " 
            + second.value 
            + ")";         
        first.style.background=first.value;
        second.style.background=second.value;
        body.style.background=color;
        document.querySelector(".output").innerText=color;
});