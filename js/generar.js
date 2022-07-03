import Contador from "../js/contador.js";

export default function generar(boton, seccion) {
  const d = document;
  const $secondView = d.getElementById("my-canvas");
  const $view = d.createElement("div"),
    $h1 = d.createElement("h1"),
    $h2 = d.createElement("h2"),
    $figure = d.createElement("figure");

  $view.classList.add("container");
  $h1.classList.add("felicitacion");
  $h2.classList.add("contador");
  $figure.classList.add("imgCumpleaños");

  $h1.setAttribute("id", "titleFelicitaciones");
  $h2.setAttribute("id", "contadorAge");
  $figure.setAttribute("id", "dinoImg");

  $view.appendChild($h1);
  $h1.innerHTML = `FelizCumpleaños!!!`;
  $view.appendChild($h2);
  $view.appendChild($figure);

  d.addEventListener("click", (e) => {
    if (e.target.matches(boton)) {
        d.querySelector(seccion).classList.toggle("is-active");
        $secondView.appendChild($view);
        Contador("contadorAge", 22);
      }
  });
}
