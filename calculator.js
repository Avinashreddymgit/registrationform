let tar=document.querySelectorAll('.d');
let output="";
let d=document.querySelector('.display');
let display=function(event){
    let val=event.target.textContent.trim();
    if(val=='DEL'){
        let d="";
        for(let i=0;i<(output.length)-1;i++){
            d=d+output[i];
        }
        output=d;
    }
    else if(val!='AC')output=output+val;
    else output="";
     d.textContent=output;
     d.style.cssText='padding-left: 0.5rem;  font-size: 1.6rem; color: azure;';
}
for(let i=0;i<(tar.length);i++){
    tar[i].addEventListener('click',display);
}
let t=document.querySelector('.e');
function cal(){
    let n1="";
    let n2="";
    let op="+";
    let f=0;
    let va="";
    for(let i=0;i<output.length;i++){
        if(output[i]!="+"&&output[i]!="-"&&output[i]!="/"&&output[i]!="*"){
            if(f==0)n1=n1+output[i];
            else n2=n2+output[i];
        }
        else{
            op=output[i];
            f=1;
        }
    }
    let n11=Number(n1);
    let n22=Number(n2);
    if(op=="+")va=n11+n22;
    if(op=='-')va=n11-n22;
    if(op=="/")va=n11/n22;
    if(op=="*")va=n11*n22;
    d.textContent=va;
     d.style.cssText='padding-left: 0.5rem;  font-size: 1.6rem; color: azure;';
}
t.addEventListener('click',cal);
document.querySelector(".f").addEventListener("submit", function (event) {
    let name=document.getElementById("name").value.trim();
    let number=document.getElementById("number").value.trim();
    if (name==="") {
        alert("Please enter your name.");
        event.preventDefault();
        return;
    }
    if (number.length!==10||isNaN(number)) {
        alert("Please enter a valid 10-digit phone number.");
        event.preventDefault();
        return;
    }
    alert("Form submitted successfully!");
});
