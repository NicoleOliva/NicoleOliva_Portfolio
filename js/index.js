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