const btn = document.querySelector("#btn_full_screen")
const video = document.getElementById("video_prod");
const next = document.getElementById("next");

btn.addEventListener('click', function () {
    video.requestFullscreen();
});

setTimeout(() => {
    next.click()
}, 45000);