
window.addEventListener("load", function () {
  new Glider(document.querySelector(".carousel__lista"), {
    slidesToShow:3,
    slidesToScroll: 1,
    focusAt:"center",
    autoplay: 2000,  
    rewind: "true",
    gap: 100,
    dots: '.tab-list',
    arrows: {
      prev: '.boton__anterior',
      next: '.boton__posterior'
    },
    responsive:[
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          scrollLock: false,
          itemWidth: 200,
          rewind: true
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25
        }
      }
    ]
  })
})



const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});


const clearInput = () => {
  const input = document.getElementsByTagName("input")[0];
  input.value = "";
}

const clearBtn = document.querySelector(".icono");
clearBtn.addEventListener("click", clearInput);






const input = document.querySelector("form input"),
    counter = document.querySelector(".contador"),
    maxLength = input.getAttribute("maxlength");

input.onkeyup = ()=>{
  counter.innerText = maxLength - input.value.length;
  
}

const warning = document.querySelector(".warningPai");

input.addEventListener("input",checkOut);

function checkOut(params) {
  const lengthMax= input.value.length;
  const max= 15;
  if (lengthMax === max){
    warning.hidden =false;
    warning.textContent=  `MAX CHARATERES = ${(max -1)} this `;
    input.classList.add("error");
  }else{
    warning.hidden =true;
    input.classList.remove("error");
    warning.textContent=  null;
  }
}



const body= document.querySelector("body");
const darkMode= document.querySelector("#dark");
darkMode.addEventListener("click",function ()  {
	darkMode.tagName("mode-label");
})


const inputCheck= document.getElementsByClassName("checkboxy").addEventListener("click",changeMode);


function changeMode(params) {
	let element = document.body;
	element.classList.toggle("dark-mode");
}

 window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    
    document.getElementById("navbar").style.background = "#501e27";
  } else {
   
    document.getElementById("navbar").style.background = "none";
  }
}



function mostrarContenedorGrid() {
   const screenWidth = window.innerWidth;
  var contenedorGrid = document.getElementById("grid-items");
  var contenedorQuestion = document.getElementById("contenedor-question")
  contenedorGrid.classList.toggle("oculto");
  if ( screenWidth < 880 ) {  
   
      if ( contenedorGrid.style.height === "0vh" ) {
        contenedorGrid.style.height = "80vh"; // Ajusta la altura máxima según tus necesidades
        contenedorGrid.style.opacity = "1";
        contenedorQuestion.style.overflow="scroll";
     
      } else {
        // Ocultar el contenedor Grid
        contenedorGrid.style.height = "0vh";
        contenedorGrid.style.opacity = "0";
        contenedorQuestion.style.overflow="hidden";
     }
  }
 
}


