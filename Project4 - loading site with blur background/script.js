const counter = document.querySelector('#counter')
const text = document.querySelector('.text')
const bg = document.querySelector('.bg')

let load=0

let interval = setInterval(blur, 30)

function blur() 
{
    load++

    if (load > 99)
    {
        clearInterval(interval)

    }
    text.style.opacity = scale(load, 0, 100, 1, 0)
    text.innerHTML=`${load}%`
    bg.style.filter = `blur(${scale(load,0, 100, 30, 0)}px)`
}



// Mapping
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}