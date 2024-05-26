/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt("Ingresa tu nombre: ");
  while (typeof(datosPersona.nombre) != "string" || datosPersona.nombre.length < 3 || datosPersona.nombre == null ){
    datosPersona.nombre = prompt("Nombre no válido, Ingresa un nombre con más de 2 caracteres: ")
  }
  datosPersona.nombre = datosPersona.nombre[0].toUpperCase() + datosPersona.nombre.slice(1).toLowerCase();
  
  const hoy = new Date();
  const anioActual = hoy.getFullYear();
  let anioNacimiento = parseInt(prompt("Ingresa el año en que naciste: "));
  while (anioNacimiento < 1900 || anioNacimiento > anioActual || isNaN(anioNacimiento)){
    anioNacimiento = prompt("Año no válido, Ingresa su año de naciemiento en formato YYYY")
  }
  datosPersona.edad = anioActual - anioNacimiento
  
  datosPersona.ciudad = prompt("Ingresa la ciudad donde vives: ")
  while (datosPersona.ciudad.length < 3 || datosPersona.ciudad == null ){
    datosPersona.ciudad = prompt("Ciudad no válida, El nombre de la ciudad debe tener más de 2 caracteres: ")
  }
  datosPersona.ciudad = datosPersona.ciudad[0].toUpperCase() + datosPersona.ciudad.slice(1).toLowerCase();

  datosPersona.interesPorJs = confirm("¿Te interesa JavaScript?")
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  const nombre = document.querySelector("#nombre");
  nombre.innerText = datosPersona.nombre;

  const edad = document.querySelector("#edad");
  edad.innerText = datosPersona.edad;

  const ciudad = document.querySelector("#ciudad");
  ciudad.innerText = datosPersona.ciudad;

  const interesJS = document.querySelector("#javascript");
  if (datosPersona.interesPorJs) {
    interesJS.innerText = "Si";
  } else {
    interesJS.innerText = "No";
  }
  fila.innerHTML = ""
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const fila = document.querySelector("#fila")
  fila.innerHTML = ""
  if (datosPersona.interesPorJs) {
    listado.forEach(materia => {
    fila.innerHTML += `
    <div class= "caja">
      <img src="${materia.imgUrl}" alt="${materia.lenguajes}">
      <p class = "lenguajes">Lenguajes: ${materia.lenguajes}</p>
      <p class = "bimestre">${materia.bimestre}</p>
    </div>
    `
  });
  } else if (datosPersona.interesPorJs === false){
    fila.innerHTML += `
    <div class= "caja">
      <p class = "bimestre">El developer no tiene interes por JS :( </p>
    </div>
    `
  } else{
    alert("Complete primero los datos del developer")
  }

}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 const sitio = document.querySelector("#sitio"); 
 sitio.classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
let mostrarSobreMi = () =>  {
  const sobreMi = document.querySelector("#sobre-mi");
  document.addEventListener("keypress", (e) =>{
    if (e.code == "KeyF") {
      sobreMi.classList.remove("oculto")
    }
  })
}

mostrarSobreMi()
