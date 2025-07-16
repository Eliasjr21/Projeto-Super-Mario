const form = document.querySelector (".formulario")
const mascara = document.querySelector (".formulario-mascara")

function Mostrarform(){
form.style.left = "50%"
form.style.transform = "translateX(-50%)"
mascara.style.visibility = "visible"
}

function Esconderform(){
form.style.left = "-300px"
form.style.transform = "translateX(0)"
mascara.style.visibility = "hidden"
}
