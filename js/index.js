import CountDown from "./cuentaRegresiva.js";
import Generar from "./generar.js";

const d = document;

d.addEventListener("DOMContentLoaded", () =>{
   CountDown("countDown", "02/07/2022 20:25:00", "Feliz Cumpleaños");
   Generar(".modal-btn", ".first-view")
   //Contador("contadorAge", 22);
})

