

const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const am_pm = document.getElementById("am-pm")


function init () {
    const time = new Date();

    let getHour = time.getHours();
    const getMinute = time.getMinutes();    
    const getSecond = time.getSeconds();


    getHour >= 12 ? am_pm.innerHTML = "PM" :  am_pm.innerHTML = "AM";
    getHour > 12 ? getHour = getHour - 12 :  getHour;   


    hour.innerHTML = getHour;
    minute.innerHTML = getMinute;
    second.innerHTML = getSecond;


}

setInterval(init, 1000);