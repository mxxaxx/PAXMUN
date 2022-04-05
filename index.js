const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");





const munTime = new Date("June 25 2022 00:00:00");

function updateCountdowntime(){
    const currentTime = new Date();
    const diff = munTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 /60 / 24);
    const h = Math.floor(diff / 1000 / 60 /60 % 24)
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000 ) % 60;

    days.innerHTML= d < 10 ? '0' + d:d;
    hours.innerHTML = h < 10 ? '0' + h:h;
    minutes.innerHTML = m < 10 ? '0' + m:m;
    seconds.innerHTML = s < 10 ? '0' + s:s;
}

setInterval(updateCountdowntime, 1000);

