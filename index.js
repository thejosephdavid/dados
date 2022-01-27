var randomNumber1 = 6;
var randomNumber2 = 6;

function randomNumberGenerator() {
    randomNumber1 = Math.floor( Math.random() * 6 ) + 1;
    randomNumber2 = Math.floor( Math.random() * 6 ) + 1;
    document.querySelector(".img1").setAttribute("src", "images/Dice"+randomNumber1+".png");
    document.querySelector(".img2").setAttribute("src", "images/Dice"+randomNumber2+".png");
    if (randomNumber1 > randomNumber2) {
        document.querySelector(".winner").innerHTML = "Para el trasero de la silla <span class='text-sky-500'>Joseph David</span>,<br>Sandía y su boñiga no dan espera.";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector(".winner").innerHTML = "Hoy no hay brief que valga, <span class='text-sky-500'>Mary A. Brown</span>,<br>Sandía carga un tronco en su panza.";
    } else {
        document.querySelector(".winner").innerHTML = "El dado ha hablado, hoy es dia de <span class='text-sky-500'>trabajo en pareja</span>,<br>La perrita asquerosa aguarda por los dos.";
    }
}

document.querySelector(".refresh").addEventListener('click', randomNumberGenerator); 