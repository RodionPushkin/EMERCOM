const dateEl = document.querySelector('.date')
const clockEl = document.querySelector('.clock')
const timerRange = document.querySelectorAll('.timer-range')
const date = new Intl.DateTimeFormat("ru", {dateStyle: "long"}).format(new Date());
const changeTimerRangeValue = (hours) => {
    timerRange.forEach(timer=>{ 
        timer.value = hours
        timer.nextSibling.textContent = hours
    })
}
timerRange.forEach(timer=>{
    timer.addEventListener('input',(event)=>{
        changeTimerRangeValue(event.target.value)
    })
})
dateEl.textContent = "Сегодня: "+ date
clockEl.textContent = "Время: "+ new Intl.DateTimeFormat("ru", {timeStyle: "medium"}).format(new Date())
changeTimerRangeValue(new Date().getHours())
setInterval(()=>{
    clockEl.textContent = "Время: "+new Intl.DateTimeFormat("ru", {timeStyle: "medium"}).format(new Date())
},1000)