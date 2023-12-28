let hoursEl=document.getElementById('hours')
let minutesEl=document.getElementById('minutes')
let btnEl=document.getElementById('btn')
let spanEl=document.getElementById('span')

function converter(){
    let hours=hoursEl.value
    let minutes=minutesEl.value
    if (hours===""){
        spanEl.textContent="Please Enter Hours"
    }
    else if (minutes===""){
        spanEl.textContent="Please Enter Minutes"
    }
    else{
        let seconds=(parseInt(hours)*3600+parseInt(minutes)*60)+" s"
        spanEl.textContent=seconds
    }
}

btnEl.addEventListener('click',converter)