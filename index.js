//Carrousel
const carrousel = document.getElementById("carrousel");

const textA = "...dolor sit amet, consectetur adipiscing elit.";
const textB = "...sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const textC = "...a diam sollicitudin tempor id.";

setInterval(() => {
  const currentText = carrousel.innerHTML;
  switch (currentText) {
    case textA:
      carrousel.innerHTML = textB;
      break;
    case textB:
      carrousel.innerHTML = textC;
      break;
    default:
      carrousel.innerHTML = textA;
      break;
  }
}, 2000);

//Agregar opciones a navbar cuando el tamaño es md

const navList = document.getElementById("nav-list");
const opciones = document.getElementById("opciones");

const agregarOptionsAElemento = (elemento) => {
  //Crear <li>
  const newLi = document.createElement("li");
  newLi.id = "options-nav";
  newLi.classList.add("nav-item");
  newLi.classList.add("active");
  newLi.classList.add("col");
  newLi.classList.add("col-lg-2");
  addOptionsFuncions(newLi);

  //Crear <a>
  const newA = document.createElement("a");
  newA.classList.add("nav-link");
  newA.href = "#";
  newA.innerHTML = "Opciones";

  newLi.appendChild(newA);

  elemento.appendChild(newLi);
};

//Funciones del options
const addOptionsFuncions = (element) => {
  element.addEventListener("click", (event) => {
    opciones.style.display = "block";
    opciones.style.position = "absolute";
    if (window.screen.availWidth <= 576) {
      opciones.style.minWidth = "95vw";
    } else {
      opciones.style.minWidth = "75vw";
    }
  });
};

//Resetear options
const resetearOptionList = (element) => {
  element.style.position = "static";
  element.style.minWidth = "auto";
};

//Agregar inicialmente si la pantalla es chica
if (window.screen.availWidth <= 992) {
  agregarOptionsAElemento(navList);
}

//Agregar si se redimenciona la pantalla
window.addEventListener("resize", (event) => {
  const optionsNav = document.getElementById("options-nav");

  if (window.screen.availWidth <= 992 && optionsNav === null) {
    agregarOptionsAElemento(navList);
    opciones.style.display = "none";
  }

  if (window.screen.availWidth > 992 && optionsNav !== null) {
    optionsNav.remove();
    //Devolver options a normal
    resetearOptionList(opciones);
  }
});