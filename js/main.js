//-----------------------#1--------------------//

const $contenedor = document.getElementById('contenedor')
const $buttom = document.getElementById('buttom')
const $divColor = document.getElementById('div-color')


$buttom.addEventListener("click", fnClick)

function fnClick(e) {
    if ($divColor.classList.contains("bg-slate-300")) {
        $divColor.classList.remove("bg-slate-300")
        $divColor.classList.add("bg-blue-300")
        $divColor.innerHTML = '<h2>azul</h2>'
    }else if ($divColor.classList.contains("bg-blue-300")){
        $divColor.classList.remove("bg-blue-300")
        $divColor.classList.add("bg-red-300")
        $divColor.innerHTML = '<h2>rojo</h2>'
    }else{
        $divColor.classList.replace("bg-red-300", "bg-slate-300")
        $divColor.innerHTML = '<h2>gris</h2>'
    }
}

//---------------------#2-------------------//