const countDownDate = new Date("Nov 1, 2021 00:00:00").getTime();

const countDownFunction = setInterval(function () {
    const now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 * 24));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("header__timer").innerHTML =
    days + " : " + hours + " : " + minutes + " : " + seconds

})
