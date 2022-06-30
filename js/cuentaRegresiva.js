const d = document;

export default function CountDown(id, limitDate, finalMessage){
    const $contDown = d.getElementById(id),
    CountDownDate = new Date(limitDate).getTime();

    let CountDownTempo = setInterval(() =>{
        let now = new Date().getTime(),
        limitTime = CountDownDate - now,
        days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
        hours = ("0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2),
        minutes = ("0" +Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))).slice(-2),
        seconds = ("0"+ Math.floor((limitTime % (1000 * 60)) / 1000)).slice(-2);

        $contDown.innerHTML = `<h3>Faltan: ${days} días ${hours} horas ${minutes} y ${seconds} segundos</h3>`;


        if(limitTime < 0){
            clearInterval(CountDownTempo);
            $contDown.innerHTML = `<h3>${finalMessage}</h3>`;
        }
    }, 1000)
}