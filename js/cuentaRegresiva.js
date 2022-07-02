const d = document;

export default function CountDown(id, limitDate, finalMessage){
    const $felicitacion = d.getElementById("felicitacion"),
    $wait = d.getElementById("wait");
    const $contDown = d.getElementById(id),
    CountDownDate = new Date(limitDate).getTime();

    let CountDownTempo = setInterval(() =>{
        let now = new Date().getTime(),
        limitTime = CountDownDate - now,
        days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
        hours = ("0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2),
        minutes = ("0" +Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))).slice(-2),
        seconds = ("0"+ Math.floor((limitTime % (1000 * 60)) / 1000)).slice(-2);

        $contDown.innerHTML = `<p class="Time">${days}:${hours}:${minutes}:${seconds}</p>`;


        if(limitTime < 0){
            clearInterval(CountDownTempo);
            $felicitacion.innerHTML = `Feliz Cumpleaños!!!`;
            $contDown.innerHTML = `<p class="Time">000:00:00:00</p>`;
            CountDown("countDown", "Jul 3, 2023 00:00:00", "Feliz Cumpleaños");
            $wait.innerHTML = `Para el proximo Cumpleaños`;
            d.getElementById("modalBtn").classList.add("modal-btn");
            d.getElementById("modalBtn").innerHTML = `Click`;
            
        }   
    }, 1000)
}