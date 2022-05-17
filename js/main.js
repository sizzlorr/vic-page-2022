const body = document.querySelector("body")
const bodyDims = {
    w: body.getBoundingClientRect().width,
    h: body.getBoundingClientRect().height
}
const limit = {
    x: 45,
    y: 15
}

body.addEventListener("mousemove", e => {
    const mouse = {
        x: e.pageX,
        y: e.pageY
    }
    const clamped = {
        x: mouse.x / bodyDims.w * limit.x - limit.x / 2,
        y: mouse.y / bodyDims.h * limit.y - limit.y / 2
    }
    document.documentElement.style.setProperty("--move-x", clamped.x + "deg")
    document.documentElement.style.setProperty("--move-y", -clamped.y + "deg")
})

window.addEventListener('deviceorientation', e => {
    const tilt = {
        x: e.gamma,
        y: e.beta
    };
    document.documentElement.style.setProperty("--move-x", tilt.x*-0.3 + "deg")
    document.documentElement.style.setProperty("--move-y", tilt.y*-0.3 + "deg")
});
