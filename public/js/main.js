let sub=document.getElementById("submit");
sub.addEventListener("click",click);

let time=document.getElementById("time");
let status=document.getElementById("status");
let out=document.getElementById("output");
let ts=document.getElementById("ts");

function click(){
     sub.innerHTML="running..";
     // out.style.display="block";
     // time.style.display="block";
     // status.style.display="block";
     // ts.style.display="block";
}

let butn=document.getElementsByClassName("btn");

for(var i=0;i<butn.length;i++){
     butn[i].addEventListener("click",lang);
}

function lang(){
     for(var i=0;i<butn.length;i++){
          butn[i].classList.remove("active");
     }
}

let c=document.getElementById("c");
let cpp=document.getElementById("cpp");
let java=document.getElementById("java");
let python=document.getElementById("python");
let javascript=document.getElementById("javascript");

c.addEventListener("click",act);
java.addEventListener("click",act);
cpp.addEventListener("click",act);
javascript.addEventListener("click",act);
python.addEventListener("click",act);

let txt=document.getElementById("text");

function act(){
       this.classList.add("active");
       txt.value=this.innerHTML;
}