import CountDown from "./cuentaRegresiva.js";
import Generar from "./generar.js";

const d = document;

d.addEventListener("DOMContentLoaded", () =>{
   CountDown("countDown", "07/03/2022 00:00:00", "Feliz Cumpleaños");
   Generar(".modal-btn", ".first-view")
   //Contador("contadorAge", 22);
})

