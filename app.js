import {elementCreator} from "truquero.js"

document.addEventListener("DOMContentLoaded", function(){
    render()
})

const render = () => {
        const root = document.getElementById("root")

        const btnNumero = elementCreator("button", "klk", "boton", "klk, soy un boton")
        root.appendChild(btnNumero)

}



//PRIMERA CLASE KEVIN JS

        // for (let i = 0; i <= 10; i++) {
        //     const boton = document.createElement("button")
        //     boton.id = "klk"
        //     boton.className = "hola"
        //     boton.innerText = "Hola, soy un boton"
        //     boton.addEventListener("click", () => {
        //         alert("klk")
        //     })

        //     const espacio =document.createElement("br")
        //     root.appendChild(boton)
        //     root.appendChild(espacio)

        //     root.appendChild(boton)
        // }




//SEGUNDA CLASE KEVIN JS CREANDO BOTONES AUTOMATICAMENTE

//         const numeros = [1,2,3,4,5,6,7,8,9,0]

//         numeros.forEach(numero => {
//             const btnNumero = document.createElement("button")
//             btnNumero.id = numero
//             btnNumero.innerText = numero
//             btnNumero.addEventListener("click", () => {
//                 alert(numero)
//         })

//         const espacio =document.createElement("br")
//             root.appendChild(btnNumero)
//             root.appendChild(espacio)

//             root.appendChild(btnNumero)
//         })
    

