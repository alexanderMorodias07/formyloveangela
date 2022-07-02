import CountDown from "./cuentaRegresiva.js";
import Contador from "./contador.js";
import generar from "./generar.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) =>{
   CountDown("countDown", "Jul 2, 2022 19:19:00", "Feliz Cumpleaños");
   generar(".modal-btn", ".first-view")
   //Contador("contadorAge", 22);
})
