let moviename=document.querySelector('.movie');
let array=[];
let count=0;
function addmovie(){
    let name=moviename.value;
    if(name===""){
        alert("please enter movie");
        return;
    }
    array.push(name);
    moviename.value="";
    count++;
}
let add=document.querySelector('.addmovie');
add.addEventListener('click',addmovie);
function rem(){
    let name=moviename.value;
    if(!array.includes(name)){
        alert('Movie not found');
        moviename.value="";
        return;
    }
    for(let i=0;i<array.length;i++){
        if(array[i]===name){
            array.splice(i,1);
            count--;
            break;
        }
    }
    moviename.value="";
}
let remove=document.querySelector('.removemovie');
remove.addEventListener('click',rem);
function display(){
    let p=document.querySelector('.addedmovies');
        p.style.cssText="display: flex;width: 20rem;border: 1px solid black;background-color:#002D62;border-radius: 1rem;box-shadow: 2px 2px 5px 2px #797676;flex-direction: column;align-items:center;gap: 0.5rem;"
        let co=document.createElement('div');
        co.classList.add('count');
        co.style.cssText="font-size:1rem; color:azure;padding:1rem;";
        co.textContent=`Total movies added: ${count}`;
        p.appendChild(co);
        array.forEach(movie=>{
        let addmovie=document.createElement('div');
     addmovie.classList.add('moviename');
     addmovie.style.cssText="font-size:1rem; color:azure;padding:1rem;";
        addmovie.textContent=movie;
        p.appendChild(addmovie);
     });
     setTimeout(()=>{
        p.innerHTML="";
        p.style.cssText="display: none;";
     },5000);
}
let show=document.querySelector('.Showmovies');
show.addEventListener('click',display);