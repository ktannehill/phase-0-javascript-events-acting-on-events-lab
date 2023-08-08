// grab dodger element and put into var
// name function for moveDodgerLeft
// grab only numbers from string "Xpx" and save to var
// parse number string into integers and save to var
// if statement ensuring we do not go past 0
// change location of dodger by interpolating new left value into px string

const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

// style.right does not change style.left, and precendence is given to style.left
// need to add value to left, while not scrolling out of the game div
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
}

// add event listener with arguments for keydown and to run function contained
// if statement condition that left arrow key is pressed
// call moveDodgerLeft function
document.addEventListener ("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});
