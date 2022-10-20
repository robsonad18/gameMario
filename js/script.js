const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const contentDery = document.querySelector(".game-board")

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500);
}

let countClicks = 0
function alterPoint() {
    countClicks++

    document.querySelector(".point").textContent = String(countClicks)

    jump();
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px","")

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`
        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`

        mario.src = "img/game-over.png"
        mario.style.width = "75px"
        mario.style.marginLeft = "50px"

        contentDery.style.background = "linear-gradient(#ec0f0f, #e8f6ff)";
        contentDery.style.borderBottom = "15px solid rgb(139, 70, 76)";

        document.querySelector(".reset").classList.remove("blocked")
        
        document.querySelector(".clouds").style.animation = "clouds-animation 5s infinite linear"

        clearInterval(loop)
    }

}, 10);

document.addEventListener("keydown", alterPoint);

document.querySelector(".reset").addEventListener("click", () => {
    location.reload();
})