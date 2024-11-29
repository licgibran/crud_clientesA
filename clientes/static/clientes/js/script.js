// cambiar el header cuando el usuario haga scroll

const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 60);
});

// Mostrar un mensaje de alerta con haga clic en el botón
/*
document.querySelector('.btn').addEventListener('click', function(){
    alert('¡Tu pedido ha sido registrado');
});

// Aplicar a todos los botones de clase .btn

document.querySelectorAll('.btn').forEach(function(button){
    button.addEventListener('click', function(){
        alert("¡Tu pedido ha sido registrado!")
    })
})
    */

// Función para el primer botón 
document.getElementById("btn-pedido").addEventListener('click', function(){
    alert("¡Pedido registrado!");
})


// Función para el segundo botón

document.getElementById("btn-promocion").addEventListener('click', function(){
    alert("Aprovechaste la promoción!");
})

// Seleccionar todos los enlaces dentro de la clase .navbar

document.querySelectorAll('.navbar a[href^="#"]').forEach(function(enlace){
    enlace.addEventListener('click', function(e){
        e.preventDefault(); // Prevenir el comportamiento por defecto del enlace
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'instant'
        })
    })
})


// Cambiar la imagen de fondo cada n segundos

const imagenes = [
    '../img/fondo-burguer.jpg',
    'img/boneless.jpg',
    'img/combos.jpg',
    'img/especiales.jpg',
    'img/hamburguesas.jpg'
];
const homeSection = document.querySelector('.home');
const intervalo = 15000; // 5000 ms = 5 s
let indiceImagen = 0;
function cambiarFondo(){
    homeSection.style.backgroundImage = `linear-gradient(to left,
                    rgba(211,103,103,0.5),
                    rgba(190,190,48,0.3)
    ), url(${imagenes[indiceImagen]}) `;
    indiceImagen = (indiceImagen + 1) % imagenes.length;
}
setInterval(cambiarFondo, intervalo); 

// Mostrar menú en pantallas pequeñas

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let enlaces = document.querySelectorAll('.navbar a');

menu.onclick = () => {
    navbar.classList.toggle('open');
    menu.classList.toggle('bx-x');
}

enlaces.forEach(link => {
    link.onclick = () => {
        navbar.classList.remove('open');
        menu.classList.remove('bx-x');
    }    
} )

// Animación de texto

var typed = new Typed('#typed', {
    strings: [' La especial de la casa', 'Sabor para alegrar tus días', ' Abrimos todos los días'],
    typeSpeed: 50,
    loop: "true",
    showCursor: "true",
    cursorChar: "_",
    backSpeed: 20,
})