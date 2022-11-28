//const saludo = prompt("Dime tu nombre");


/*const text = document.getElementById("titulo");
text.innerHTML = saludo;*/


const teses = [ {id: "01",  nombre: "chai",base:"té negro", precio:3000 },
                {id: "02",  nombre: "pukem",base:"té negro", precio:3000},
                {id: "03",  nombre: "pewu",base:"té verde", precio:3000},
                {id: "04",  nombre: "rimu",base:"té rojo", precio:3500},
                {id: "05",  nombre: "kelu",base:"té rojo", precio:3500},
                {id: "06",  nombre: "piuke",base:"té blanco", precio:3500},
                {id: "07",  nombre: "walung", base:"té blanco", precio:3500}]


const black = [ {id: "01",  nombre: "chai",base:"te negro", precio:3000 },
                {id: "02",  nombre: "pukem",base:"te negro", precio:3000}]

const white = [{id: "03",  nombre: "piuke",base:"te blanco", precio:3500},
               {id: "04",  nombre: "walung", base:"te blanco", precio:3500}]

const green = [{id: "05",  nombre: "pewu",base:"te verde", precio:3000}]

const red = [{id: "04",  nombre: "rimu",base:"te rojo", precio:3500},
             {id: "05",  nombre: "kelu",base:"te rojo", precio:3500}]



const botonNegro = document.getElementById("teNegro")
const botonVerde = document.getElementById("teVerde")
const botonRojo = document.getElementById("teRojo")
const botonAzul = document.getElementById("teAzul")
const botonBlanco = document.getElementById("teBlanco")
const resetButton = document.getElementById("reseteichon")
const allTe = document.getElementById("todos")

let div_container = document.getElementById("container");


resetButton.onclick = (e)=>{
    e.preventDefault()
    div_container.innerHTML = null
}  




botonNegro.onclick = (e)=>{
   
    e.preventDefault()
    div_container.innerHTML = null

    for (const tes of black){
        const cajas = document.createElement("div")
        
        cajas.innerHTML = `<img src="img/${tes.id}.png">
        <h2>${tes.nombre}</h2>
        <p>El ${tes.nombre} 
        tiene base ${tes.base} y tiene un valor de $${tes.precio}</p>`
        cajas.className = 'cajas'
        
        div_container.appendChild(cajas)   
        }
    
}

botonVerde.onclick = (e)=>{
    e.preventDefault()
    
    div_container.innerHTML = null

    for (const tes of green){
        const cajas = document.createElement("div")
        
        cajas.innerHTML = `<img src="img/${tes.id}.png">
        <h2>${tes.nombre}</h2>
        <p>El ${tes.nombre} 
        tiene base ${tes.base} y tiene un valor de $${tes.precio}</p>`
        cajas.className = 'cajas'
        
        div_container.appendChild(cajas)   
    }                 
}


botonRojo.onclick = (e)=>{
    e.preventDefault()

    div_container.innerHTML = null

    for (const tes of red){
        const cajas = document.createElement("div")
        
        cajas.innerHTML = `<img src="img/${tes.id}.png">
        <h2>${tes.nombre}</h2>
        <p>El ${tes.nombre} 
        tiene base ${tes.base} y tiene un valor de $${tes.precio}</p>`
        cajas.className = 'cajas'
        
        div_container.appendChild(cajas)   
    }    
}

botonBlanco.onclick = (e)=>{
    
    e.preventDefault()
    div_container.innerHTML = null
   

    for (const tes of white){
        const cajas = document.createElement("div")
        
        cajas.innerHTML = `<img src="img/${tes.id}.png">
        <h2>${tes.nombre}</h2>
        <p>El ${tes.nombre} 
        tiene base ${tes.base} y tiene un valor de $${tes.precio}</p>`
        cajas.className = 'cajas'
        
        div_container.appendChild(cajas)   
    }    
}

allTe.onclick = (e)=>{

    e.preventDefault()
    div_container.innerHTML = null

    for (const tes of teses){
    
        const cajas = document.createElement("div")
                        
        cajas.innerHTML = `<img src="img/${tes.id}.png">
        <h2>${tes.nombre}</h2>
        <p>El ${tes.nombre} 
        tiene base ${tes.base} y tiene un valor de $${tes.precio}</p>`
        cajas.className = 'cajas'
                        
        div_container.appendChild(cajas)
    }       
} 