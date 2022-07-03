import CountDown from "./cuentaRegresiva.js";
import Generar from "./generar.js";

const d = document;

d.addEventListener("DOMContentLoaded", () =>{
   CountDown("countDown", "Jul 2, 2022 20:18:00", "Feliz Cumpleaños");
   Generar(".modal-btn", ".first-view")
   //Contador("contadorAge", 22);
})

