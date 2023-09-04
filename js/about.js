'use strict'

/* Está función despliega el menú para móvil, cuando llega a 700 px se muestra el menú de puntos,
   al hacer click en el menú activa la funtion y despliega el menú de navegación */

// Cuando hago CLICK en headerDots hace un FUNTION
   // headerNav le TOGGLE de la clase isActive


   const headerDots   = document.querySelector(`.Header-dots`)
   const headerNav    = document.querySelector(`.Header-nav`)
   console.log( headerDots )
   console.log( headerNav )

   headerDots.addEventListener(`click` , ()=>{

    headerNav.classList.toggle(`isActive`)
    headerDots.classList.toggle(`isActive`)
   })



   /* Al hacer click en Main tittle despliega el contenido que está dentro */

// Cuando hago CLICK en .Main-tittle
     // .Main-paragraph con la POSICION INDEX le TOGGLE la clase isActive

 const mainTittle     = document.querySelectorAll(`.Main-tittle`)
 const mainParagraph  = document.querySelectorAll(`.Main-paragraph`)

 mainTittle.forEach(( eachP , i )=>{
   mainTittle[i].addEventListener('click',()=>{

      mainParagraph[i].classList.toggle(`isActive`)

     })
 })

 /* Al hacer click en Main specialties despliega el contenido que está dentro */

 // Cuando hago CLICK en .Main-specialties
     // .Main-graphiccontainer con la POSICION INDEX le TOGGLE la clase isActive

     const mainSpecialties       = document.querySelectorAll(`.Main-specialties`)
     const mainGraphiccontainer  = document.querySelectorAll(`.Main-graphiccontainer`)
    
     mainSpecialties.forEach(( eachP , i )=>{
      mainSpecialties[i].addEventListener('click',()=>{
    
         mainGraphiccontainer[i].classList.toggle(`isActive`)
    
         })
     })
