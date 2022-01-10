// sets the global varables so tey can be acessed anywhere
let sheepCount = 0;
let startTime = null;
let endTime = null;

/**
 * function start()
 * hides the start menu
 * shows the sheep field
 * records the start time
 */
function start() {
    document.getElementById("start-menu").style.visibility = 'hidden';
    document.getElementById("sheep-field").style.visibility = 'visible';
    startTime = Date.now();
}


/**
 * function sheepOne()
 * hides sheepOne from the field
 * shows sheepOne in the trailer
 * increments the sheep count
 * checks if it should terminate the game if all other sheep have been clicked
 */
function sheepOne() {
    document.getElementsByClassName("field-sheep-imgs")[0].style.visibility = 'hidden';
    document.getElementsByClassName("trailer-sheep-imgs")[5].style.visibility = 'visible';
    sheepCount++;
    if (sheepCount === 6) {
        terminate();
    }
}

/**
 * function sheepTwo()
 * hides sheepTwo from the field
 * shows sheepTwo in the trailer
 * increments the sheep count
 * checks if it should terminate the game if all other sheep have been clicked
 */
function sheepTwo() {
    document.getElementsByClassName("field-sheep-imgs")[1].style.visibility = 'hidden';
    document.getElementsByClassName("trailer-sheep-imgs")[4].style.visibility = 'visible';
    sheepCount++;
    if (sheepCount === 6) {
        terminate();
    }
}

/**
 * function sheepThree()
 * hides sheepThree from the field
 * shows sheepThree in the trailer
 * increments the sheep count
 * checks if it should terminate the game if all other sheep have been clicked
 */
function sheepThree() {
    document.getElementsByClassName("field-sheep-imgs")[2].style.visibility = 'hidden';
    document.getElementsByClassName("trailer-sheep-imgs")[3].style.visibility = 'visible';
    sheepCount++;
    if (sheepCount === 6) {
        terminate();
    }
}

/**
 * function sheepFour()
 * hides sheepFour from the field
 * shows sheepFour in the trailer
 * increments the sheep count
 * checks if it should terminate the game if all other sheep have been clicked
 */
function sheepFour() {
    document.getElementsByClassName("field-sheep-imgs")[3].style.visibility = 'hidden';
    document.getElementsByClassName("trailer-sheep-imgs")[2].style.visibility = 'visible';
    sheepCount++;
    if (sheepCount === 6) {
        terminate();
    }
}

/**
 * function sheepFive()
 * hides sheepFive from the field
 * shows sheepFive in the trailer
 * increments the sheep count
 * checks if it should terminate the game if all other sheep have been clicked
 */
function sheepFive() {
    document.getElementsByClassName("field-sheep-imgs")[4].style.visibility = 'hidden';
    document.getElementsByClassName("trailer-sheep-imgs")[1].style.visibility = 'visible';
    sheepCount++;
    if (sheepCount === 6) {
        terminate();
    }
}

/**
 * function sheepSix()
 * hides sheepSix from the field
 * shows sheepSix in the trailer
 * increments the sheep count
 * checks if it should terminate the game if all other sheep have been clicked
 */
function sheepSix() {
    document.getElementsByClassName("field-sheep-imgs")[5].style.visibility = 'hidden';
    document.getElementsByClassName("trailer-sheep-imgs")[0].style.visibility = 'visible';
    sheepCount++;
    if (sheepCount === 6) {
        terminate();
    }
}

/**
 * function terminate()
 * shows the end menu
 * calls the score function
 */
function terminate() {
    document.getElementById("end-menu").style.visibility = 'visible';
    score();
}

/**
 * function score()
 * sets the end time
 * rounds the score to one decimal place
 * sets the score on the end menu
 */
function score() {
    endTime = Date.now();
    let yourTime = Math.floor(((endTime - startTime) / 1000) * 10) / 10;
    document.getElementById("score-span").innerHTML = yourTime;
}

/**
 * function restart()
 * reloads the page
 */
function restart() {
    location.reload();
}