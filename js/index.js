import CountDown from "./cuentaRegresiva.js";
// import Contador from "./contador.js";
// import generar from "./generar.js";

const d = document;

d.addEventListener("DOMContentLoaded", () =>{
   CountDown("countDown", "Jul 3, 2022 20:10:00", "Feliz Cumpleaños");
   generar(".modal-btn", ".first-view")
   //Contador("contadorAge", 22);
})

