let sub=document.getElementById("submit");
sub.addEventListener("click",click);

let time=document.getElementById("time");
let status=document.getElementById("status");
let out=document.getElementById("output");
let ts=document.getElementById("ts");

function click(){
     sub.innerHTML="running..";
}

let butn=document.getElementsByClassName("btn");

for(var i=0;i<butn.length;i++){
     butn[i].addEventListener("click",lang);
     butn[i].addEventListener("click",act);
}

function lang(){
     for(var i=0;i<butn.length;i++){
          butn[i].classList.remove("active");
     }
}

let codes={
       "C": '#include <stdio.h>\n\nint main() {\n     //code\n     return 0;\n}',
     "CPP14": '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout<<"YoYaPa!";\n    return 0;\n}',
     "JAVA8":'/*package whatever //do not write package name here */\n\nimport java.io.*;\n\nclass YoYaPa {\n    public static void main (String[] args) {\n        System.out.println("YoYaPa!");\n   }\n}',
     "PYTHON3": '#code\nprint("YoYaPa")',
     "CPP": '#include <iostream>\nusing namespace std;\n\nint main() {\n   cout<<"YoYaPa!";\n   return 0;\n}'
  }; 

let txt=document.getElementById("text");

function act(){
       this.classList.add("active");
       txt.value=this.innerHTML;
       localStorage.setItem("lang",this.innerHTML);

       let c=localStorage.getItem(this.innerHTML);
       if(c===undefined||c===null||c===""){
          rest();
       }else{
              document.getElementById("code").value=c;
       }
}

let copy=document.getElementById("copy2");
copy.addEventListener("click",cpy);

function cpy(){
     let text=document.getElementById("code");
     text.select();
  document.execCommand('copy');

  copy.innerHTML="Copied";
  setTimeout(function(){
     copy.innerHTML="COPY";
  },1000);
}

let incopy=document.getElementById("incopy");
incopy.addEventListener("click",incpy);

function incpy(){
     let text=document.getElementById("input");
     text.select();
  document.execCommand('copy');

  incopy.value="Copied";
  incopy.style.right="4px";
  setTimeout(function(){
     incopy.value="COPY";
     incopy.style.right="8px";
  },1000);
}


let outcopy=document.getElementById("outcopy");
outcopy.addEventListener("click",outcpy);

function outcpy(){
     let text=document.getElementById("output");
     text.select();
  document.execCommand('copy');

  outcopy.value="Copied";
  outcopy.style.right="4px";
  setTimeout(function(){
     outcopy.value="COPY";
     outcopy.style.right="8px";
  },1000);
  
}

let code=document.getElementById("code");
code.addEventListener("change",change);

  function change(){
       let lan =document.getElementsByClassName("active");
       localStorage.setItem(lan[0].innerHTML,code.value);
  }


function load(){
       
     let cl=document.getElementById(localStorage.getItem("lang"));
     let c=localStorage.getItem(cl.innerHTML);
     if(c===undefined||c===null||c===""){
          rest();
       }else{
              document.getElementById("code").value=c;
       }
 
     for(var i=0;i<butn.length;i++){
          butn[i].classList.remove("active");
     }
     cl.classList.add("active");
}

let reset=document.getElementById("reset1");
reset.addEventListener("click",rest);
reset.addEventListener("click",set);

function set() {
     reset.innerHTML="DONE!";
  setTimeout(function(){
     reset.innerHTML="RESET";
  },1000);
}

function  rest() {
      let cl=document.getElementById(localStorage.getItem("lang"));
      let val=cl.innerText;
      let put;
      if(val==="C"){
      put=codes.C;
      }else if(val==="CPP"||val==="CPP14"){
       put=codes.CPP;
      }else if(val==="PYTHON3"){
        put=codes.PYTHON3;
      }else{
        put=codes.JAVA8;
      }
      document.getElementById("code").value=put;
      localStorage.setItem(val,put);

}
