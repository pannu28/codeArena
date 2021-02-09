let sub=document.getElementById("submit");
sub.addEventListener("click",click);

function click(){
     sub.innerHTML="running";
     out=document.getElementById("output");
     out.style.display="block";
}