'use strict'

/* Está función despliega el menú para móvil, cuando llega a 700 px se muestra el menú de puntos,
   al hacer click en el menú activa la funtion y despliega el menú de navegación */

// Cuando hago CLICK en headerDots hace un FUNCTION
// headerNav le TOGGLE de la clase isActive

const headerDots = document.querySelector(`.Header-dots`)
const headerNav = document.querySelector(`.Header-nav`)
console.log(headerDots)
console.log(headerNav)

headerDots.addEventListener(`click`, () => {

  headerNav.classList.toggle(`isActive`)
  headerDots.classList.toggle(`isActive`)
})

/*  */

// Cuando hago CLICK en Grid-a hace una FUNCTION
// Lightbox le ADD la clase isActive

const gridA = document.querySelectorAll(`.Grid-a`)
const lightboxProject = document.querySelectorAll(`.Lightbox-project`)
const lightbox = document.querySelector(`.Lightbox`)
const lightboxClose = document.querySelector(`.Lightbox-close`)

gridA.forEach((eachA, i) => {

  gridA[i].addEventListener(`click`, () => {

    console.log(gridA)
    console.log(i)

    lightbox.classList.add(`isActive`)
    lightboxProject[i].classList.add(`isActive`)

  })
})

// Cuando hago CLICK en Lightbox-close hace una FUNTION
// Lightbox le REMOVE la clase isActive

gridA.forEach((eachA, i) => {

  lightboxClose.addEventListener(`click`, () => {

    lightbox.classList.remove(`isActive`)
    lightboxProject[i].classList.remove(`isActive`)

  })
})

// // Cuando hago CLICK en Lightbox-close hace una FUNTION
//    // Lightbox le REMOVE la clase isActive

// lightboxClose.addEventListener(`click` , ()=>{
//     lightbox.classList.remove(`isActive`)
// })

