let randomBox = "";
let remainingMistakes = 5;
let score = 0;
const generator = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const appendContent = (id, text) => {
    document.getElementById(id).innerText = text;
}
function rounds() {
    const randomBox = generator(6, 1);    
    
    const red = generator(255, 0);
    const green = generator(255, 0);
    const blue = generator(255, 0);

    appendContent("red", red);
    appendContent("green", green);
    appendContent("blue", blue);

    let boxes = document.getElementsByClassName("box");
    for(let box of boxes) {
        if(box.getAttribute("box-key") == randomBox) {
            box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        } else {
            box.style.backgroundColor = `rgb(${generator(255, 0)},${generator(255, 0)},${generator(255, 0)})`
        }
    }
    return randomBox;
}
randomBox = rounds();
function submit(id) {
    if(remainingMistakes === 0) {
        alert("You have no mistakes remaining.. You have scored " + score)
        return;
    }
    if(randomBox == id) {
        randomBox = rounds();
        alert("Great!! Keep going....");
        score++;
        appendContent("score", "Score: " + score);
        appendContent("mistakes", "Remaining Mistakes: " + remainingMistakes);
    } else {
        remainingMistakes--;
        alert(`You have ${remainingMistakes} mistakes left`)
        appendContent("score", "Score: " + score);
        appendContent("mistakes", "Remaining Mistakes: " + remainingMistakes);
    }
}