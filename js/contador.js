export default function Contador(id, n) {
  const d = document;
  const $contador = d.getElementById(id);
  let i = 0;
  
  const contador = setInterval(() => {
    $contador.innerHTML = i;
    i++;
    const $dinoImg = d.getElementById("dinoImg");
    setTimeout(() => {
      $dinoImg.innerHTML = `<img src="cumple/assets/img/dino.png" alt="Cumpleaños" />
      <figcaption class="img-text">Mi querida dinosaurio</figcaption>`;
    }, 100);
    if (i === n + 1) {
      clearInterval(contador);
      $contador.classList.toggle("contador-off");
      
    }
  }, 100);
}

