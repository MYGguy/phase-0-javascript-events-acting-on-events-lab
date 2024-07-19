const dodger = document.getElementById('dodger');

function dodgerPosition() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    return left;
}

function moveDodgerLeft(){
    const left = dodgerPosition();
        if (left > 0) {
            dodger.style.left = `${left - 1}px`;
        }
}

function moveDodgerRight() {
    const left = dodgerPosition();
    
    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
    moveDodgerLeft();   
    }
})

document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') {
        moveDodgerRight();
    }
})

