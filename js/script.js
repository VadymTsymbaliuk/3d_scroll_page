// 3D-scroll


let zSpassing = -1000,
    lastPos = zSpassing / 5,
    $frames = document.querySelectorAll(".frame"),
    frames = Array.from($frames),
    zVals = []

window.onscroll = function () {
    let top = document.documentElement.scrollTop
    let delta = lastPos - top

    lastPos = top
    frames.forEach(function (n, i) {
        zVals.push((i * zSpassing) + zSpassing)
        zVals[i] += delta * -5
        let frame = frames[i],
            transform = `translateZ(${zVals[i]}px)`,
            opacity = zVals[i] < Math.abs(zSpassing) / 1.3 ? 1 : 0
        ;

        frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
    })
}

window.scrollTo(0, 1)

//audio

let soundButton = document.querySelector(".sound-button"),
    audio = document.querySelector('.audio')

soundButton.addEventListener("click", e => {
    soundButton.classList.toggle('paused')
    audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function () {
    soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}