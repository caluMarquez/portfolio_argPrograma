let menuVisible =false;

//Funcion para ocultar y mostrar menu
function mostrarOcultarMenu(){
    if(menuVisible){
    document.getElementById('menu').classList='';
    menuVisible=false;
}else{
    document.getElementById('menu').classList='responsive';
    menuVisible=true;
}}


function seleccionar(){
    //oculto el menu una vez que se seleciona una opcion 
    document.getElementById('menu').classList='';
    menuVisible=false;
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    let skills = document.getElementById('skills');
    let distancia = window.innerHeight - skills.getBoundingClientRect().top
if(distancia>=300){
    let habilidades = document.getElementsByClassName('progreso')
    habilidades[0].classList.add('javascript');
    habilidades[1].classList.add('htmlcss');
    habilidades[2].classList.add('javascript');
    habilidades[3].classList.add('redux');
    habilidades[4].classList.add('java');
    habilidades[5].classList.add('javascript');
    habilidades[6].classList.add('express');
    habilidades[7].classList.add('photo');
    habilidades[8].classList.add('photo');
    habilidades[9].classList.add('team');
    habilidades[10].classList.add('creat');
    habilidades[11].classList.add('team');
    habilidades[12].classList.add('express');
    habilidades[13].classList.add('htmlcss');

}

}


//detectar scroll para activar animacion de la barraskill
window.onscroll = function(){
    efectoHabilidades();
}