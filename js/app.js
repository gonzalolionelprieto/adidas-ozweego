
 const navMenu=document.getElementById('nav-menu'),
       toggleMenu=document.getElementById('nav-toggle'),
       closeMenu=document.getElementById('nav-close') 

toggleMenu.addEventListener('click',()=>{
    navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click',()=>{

    navMenu.classList.remove('show');

})

const navLink =document.querySelectorAll('.nav-link')

function linkAccion(){


	navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click',linkAccion))




const seccionesPagina = new fullpage('#fullpage',{
    autoScrolling: true, // Se activa el scroll.
    fitToSection: true, // Acomoda el scroll automaticamente para que la seccion se muestre en pantalla.
    fitToSectionDelay: 300, // Delay antes de acomodar la seccion automaticamente.
    easing: 'easeInOutCubic', // Funcion de tiempo de la animacion.
    scrollingSpeed: 700, // Velocidad del scroll. Valores: en milisegundos.
    css3: true, // Si usara CSS3 o javascript.
    easingcss3: 'ease-out', // Curva de velocidad del efecto.
    loopBottom: true, // Regresa a la primera seccion siempre y cuando se ya haya llegado a la ultima sección y el ususario siga scrolleando.


    //   :::::: Barra de navegación
	// ──────────────────────────────────────────────────
		 navigation: true, // Muesta la barra de navegación.
		 menu: '#menu', // Menu de navegación.
		 anchors: ['inicio', 'producto', 'contacto'], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
		 navigationTooltips: ['Inicio', 'Productos', 'Contacto'], // Tooltips que mostrara por cada boton.
         showActiveTooltip: false, // Mostrar tooltip activa.
         //   :::::: Secciones
	// ──────────────────────────────────────────────────
		 sectionsColor : ['#cac3bd', '#cac3bdS', '#eceef0'], // Color de fondo de cada seccion.
		 verticalCentered: true, // Si alineara de forma vertical los contenidos de cada seccion.
    // ──────────────────────────────────────────────────
    //   :::::: Slides
	// ──────────────────────────────────────────────────
		 controlArrows: true, // Flechas del slide
		 slidesNavigation: false, // Indicadores del slide
    // ──────────────────────────────────────────────────

    // ───────────────────  PRIMER SLIDE  ───────────────────────────────
    onLeave : function(origin, destination){
        let info = document.querySelector('.informacion-producto-1');
        let img = document.querySelector('.info-imagen');
        let imgP = document.querySelector('.P');
        let imgS = document.querySelector('.S');
      
        if(destination.anchor == 'producto'){
           
            info.classList.add('animate__animated', 'animate__fadeInDownBig');
            info.style.setProperty('--animate-duration', '0.5s');
            img.classList.add('animate__animated', 'animate__fadeInDownBig');
            img.style.setProperty('--animate-duration', '0.5s');
           
        }
        if(destination.anchor == 'contacto'){
       
            imgP.classList.add('animate__animated', 'animate__fadeInLeftBig');
            imgP.style.setProperty('--animate-duration', '0.5s');
            imgS.classList.add('animate__animated', 'animate__fadeInRightBig');
            imgS.style.setProperty('--animate-duration', '0.5s');
           
        }
   },

    // ────────────────────── SEGUNDO Y TERCERSLIDE ────────────────────────────
    onSlideLeave: function(section, origin, destination, direction){
            let infoD = document.querySelector('.tx-D');
            let imgD = document.querySelector('.imgD')
            let infoT = document.querySelector('.tx-T');
            let imgT = document.querySelector('.imgT')


        if (section.anchor == 'producto' && destination.index == 0){
            
          
        }

        if (section.anchor == 'producto' && destination.index == 1){
            infoD.classList.add('animate__animated', 'animate__fadeInLeftBig');
            infoD.style.setProperty('--animate-duration', '0.5s');
            imgD.classList.add('animate__animated', 'animate__fadeInLeftBig');
            imgD.style.setProperty('--animate-duration', '0.7s');
           
        }
        if (section.anchor == 'producto' && destination.index == 2){
            infoT.classList.add('animate__animated', 'animate__fadeInLeftBig');
            infoT.style.setProperty('--animate-duration', '0.5s');
            imgT.classList.add('animate__animated', 'animate__fadeInLeftBig');
            imgT.style.setProperty('--animate-duration', '0.7s');
        }
       
   },
  
});