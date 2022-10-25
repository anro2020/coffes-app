const container = document.querySelector(".container")

const coffes = [
  {id:"0", namec: "Café de vainilla", images:"src/cafe1.jpg", description:"El espresso o el caffè (como es usual decirle en Italia en las barras de las cafeterías) se sirve en pequeñas tazas de 2.5 a 3 onzas y la bebida en sí equivale a 1 onza;"},
  {id:"1", namec: "Café de vanilla con miel", images:"src/cafe2.jpg", description:"El (Espresso/Caffè) Macchiato o el Cortado pueden ser la misma bebida o diferente dependiendo de en cuál país está."},
  {id:"2", namec: "Café de chocolate", images:"src/cafe3.jpg", description:"La base del (Espresso/Caffè) Corretto es un espresso y se “corrige” agregándole un brandy u otro tipo de licor."},
  {id:"3", namec: "Café de oreo", images:"src/cafe4.jpg", description:"El caffè lungo o espresso largo se prepara como un espresso normal, pero se deja pasar más agua por la misma cantidad de café, lo que prolonga la extracción de la bebida."},
  {id:"4", namec: "Café de rompope", images:"src/cafe5.jpg", description:"El caffè ristretto o corto tiene un tiempo de extracción menos prolongado; asimismo, la bebida es la mitad de la cantidad de un espresso, más o menos 15ml."},
  {id:"5", namec: "Café de nuez", images:"src/cafe6.jpg", description:"Con panna significa que es un espresso o café con crema/nata batida que se pone sobre este. Dependiendo del país, se conoce también como café vienés."},
  {id:"6", namec: "Café ligero", images:"src/cafe7.jpg", description:"El espresso doppio, que significa doble, es nada más y nada menos que dos espressos (en italiano, plural, es espressi) en una taza. "},
  {id:"7", namec: "Café de galleta", images:"src/cafe8.jpg", description:"El Americano se sirve en tazas de 6 onzas y es un espresso diluido con agua caliente."},
  {id:"8", namec: "Café con hielo", images:"src/cafe9.jpg", description:"El caffè latte o café con leche es una de las bebidas más populares. "}
]

const showCoffes = () => {
  let output = ""
  coffes.forEach(({id,namec,images}) => (
    output +=  `
    <div class="card" id="data">
        <input type="hidden" value="${id}">
        <img class="card--avatar"src="${images}"/>
        <h1 class="card--title">${namec}</h1>
        <a onclick="verMas('${id}')" class="card--link" href="#">Taste</a>
    </div>
    `) 
    );
    container.innerHTML = output
}

document.addEventListener("DOMContentLoaded",showCoffes)


function verMas(value){
  localStorage.setItem("arr", coffes)
  localStorage.setItem("id", value)
  window.location.href="detalle.html"
}

if("serviceWorker" in navigator){
    window.addEventListener("load",function(){
        navigator.serviceWorker
            .register("js/serviceWorker.js")
            .then(res => console.log("Service worker registrado"))
            .catch(err=>console.log("Service worker error",err))
    })
}