let p1=document.querySelector('.player1');
let p2=document.querySelector('.player2');
let boxes=document.querySelectorAll('.box');
let p1p=0;
let p2p=0;
function p1f(){
    p2p=0;
     p1p=1;
     p1.classList.add('pop');
     p2.classList.remove('pop');
}
function p2f(){
    p1p=0;
    p2p=1;
    p1.classList.remove('pop');
    p2.classList.add('pop');
}
p1.addEventListener('click',p1f);
p2.addEventListener('click',p2f);
let buttonsmarked=0;
let vis=[0,0,0,0,0,0,0,0];
let p1col=[0,0,0];
let p1row=[0,0,0];
let p1d1=0;
let p1d2=0;
let p2col=[0,0,0];
let p2row=[0,0,0];
let p2d1=0;
let p2d2=0;
let spy=0;
function addmark(event,index){
    let i1=Math.floor(index/3);
    let j1=index%3;
    if(vis[index]===1){
        alert("cannot mark!");
        return;
    }
    buttonsmarked++;
let cir=document.createElement('div');
let cros=document.createElement('div');
cir.classList.add('circle');
cros.classList.add('cross');
 let box=event.target;
 if(p1p===1){
    p1col[j1]++;
    p1row[i1]++;
    if(i1===j1)p1d1++;
    if(i1+j1===2)p1d2++;
    vis[index]=1;
    box.appendChild(cir);
    p2f();
    if(p1col[j1]===3||p1row[i1]===3||p1d1===3||p1d2===3){
        spy=1;
         vis=[0,0,0,0,0,0,0,0];
 p1col=[0,0,0];
 p1row=[0,0,0];
 p1d1=0;
 p1d2=0;
 p2col=[0,0,0];
 p2row=[0,0,0];
 p2d1=0;
 p2d2=0;
 let win=document.querySelector('.win');
 win.textContent="Player1 won!";
        setTimeout(()=>{
            boxes.forEach((bt)=>{
                bt.innerHTML="";
            })
            buttonsmarked=0;
            p1.classList.remove('pop');
            p2.classList.remove('pop');
            win.innerHTML="";
            p1p=0;
            p2p=0;
        },2000);
    }
 }
 else if(p2p==1){
    p2col[j1]++;
    p2row[i1]++;
    if(i1===j1)p2d1++;
    if(i1+j1===2)p2d2++;
    vis[index]=1;
    box.appendChild(cros);
    p1f();
    if(p2col[j1]===3||p2row[i1]===3||p2d1===3||p2d2===3){
        spy=1;
        vis=[0,0,0,0,0,0,0,0];
 p1col=[0,0,0];
 p1row=[0,0,0];
 p1d1=0;
 p1d2=0;
 p2col=[0,0,0];
 p2row=[0,0,0];
 p2d1=0;
 p2d2=0;
 let win=document.querySelector('.win');
 win.textContent="Player2 won!";
        setTimeout(()=>{
            boxes.forEach((bt)=>{
                bt.innerHTML="";
            })
            buttonsmarked=0;
            p1.classList.remove('pop');
            p2.classList.remove('pop');
            win.innerHTML="";
            p1p=0;
            p2p=0;
        },2000);
    }
 }
 else{
    buttonsmarked--;
    p1f();
 }
  if(buttonsmarked===9&&spy===0){
    let win=document.querySelector('.win');
 win.textContent="Draw!";
    setTimeout(()=>{
        vis=[0,0,0,0,0,0,0,0];
 p1col=[0,0,0];
 p1row=[0,0,0];
 p1d1=0;
 p1d2=0;
 p2col=[0,0,0];
 p2row=[0,0,0];
 p2d1=0;
 p2d2=0;
        win.innerHTML="";
    boxes.forEach((bt)=>{
        bt.innerHTML="";
    })
    buttonsmarked=0;
    p1.classList.remove('pop');
    p2.classList.remove('pop');
    p1p=0;
    p2p=0;
},2000);
 }
};
boxes.forEach((button,i)=>{
    button.addEventListener('click',(event)=>{
        let index=i;
        addmark(event,index);
    }
);
    console.log(i);
    });