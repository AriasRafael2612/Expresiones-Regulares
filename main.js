import './style.css'

//se define la palabra que sera nuestra expresion regular
let expresionRegular = /hola/

//establece un evento de clic en el elemento HTML con el ID "boton" 
const boton = document.getElementById("boton")
boton.addEventListener("click", mostrarResultado)

//variable parrafo para mostrar el texto
const parrafo = document.createElement('p')

//Funcion para mostrar el resultado en el DOM
function mostrarResultado() {

  const Textarea = document.getElementById("textarea");
  const cadena = Textarea.value;

  if (expresionRegular.test(cadena)) {
    parrafo.textContent = 'Fizz'
  }
  else {
    parrafo.textContent = 'Buzz'
  }
}


document.body.appendChild(parrafo)