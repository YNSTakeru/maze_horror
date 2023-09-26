const nextButton = document.querySelector(".next-button");
const levelOne = document.querySelector(".level-one");
const levelTwo = document.querySelector(".level-two");
const uiLevel = document.querySelector(".ui-level");
const uiMessage = document.querySelector("ui-message");
const shigePicture = document.querySelector(".shige-picture");
const laughingSound = document.querySelector(".laughing-sound");

const collisionCheck = (value) => {
    if (value === "maze-border") {
        alert("壁に衝突しました。リトライしますか？");
    }
    if (value === "finish") {
        nextButton.style.opacity = 1;
        nextButton.style.pointerEvents = "all";
    }
    if (value === "end-game") {
        laughingSound.play();
        shigePicture.style.display = "block";
        document.body.style.background = "block";
    }
};

addEventListener("mousemove", (e) => {
    let check = e.target.classList.value;
    collisionCheck(check);
});

nextButton.addEventListener("click", () => {
    levelOne.style.display = "none";
    levelTwo.style.display = "block";
    nextButton.style.pointerEvents = "none";
    uiLLevel.textContent = "Level 2";
    uiMessage.textContent = "いい感じ！";
});
