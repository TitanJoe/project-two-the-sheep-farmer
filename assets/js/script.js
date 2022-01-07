let sheepCount = 0;
let startTime;
let endTime;

function start(){
    document.getElementById("start-menu").style.visibility = 'hidden';
    document.getElementById("sheep-field").style.visibility = 'visible';
    startTime = Date.now();
};

function sheepOne(){
    document.getElementsByClassName("field-sheep-imgs")[0].style.visibility = 'hidden';
    document.getElementsByClassName("trailer-sheep-imgs")[5].style.visibility = 'visible';
    sheepCount++;
    if(sheepCount === 6){
        terminate()
    }
}

function sheepTwo(){
    document.getElementsByClassName("field-sheep-imgs")[1].style.visibility = 'hidden';
    document.getElementsByClassName("trailer-sheep-imgs")[4].style.visibility = 'visible';
    sheepCount++;
    if(sheepCount === 6){
        terminate()
    }
}

function sheepThree(){
    document.getElementsByClassName("field-sheep-imgs")[2].style.visibility = 'hidden';
    document.getElementsByClassName("trailer-sheep-imgs")[3].style.visibility = 'visible';
    sheepCount++;
    if(sheepCount === 6){
        terminate()
    }
}

function sheepFour(){
    document.getElementsByClassName("field-sheep-imgs")[3].style.visibility = 'hidden';
    document.getElementsByClassName("trailer-sheep-imgs")[2].style.visibility = 'visible';
    sheepCount++;
    if(sheepCount === 6){
        terminate()
    }
}

function sheepFive(){
    document.getElementsByClassName("field-sheep-imgs")[4].style.visibility = 'hidden';
    document.getElementsByClassName("trailer-sheep-imgs")[1].style.visibility = 'visible';
    sheepCount++;
    if(sheepCount === 6){
        terminate()
    }
}

function sheepSix(){
    document.getElementsByClassName("field-sheep-imgs")[5].style.visibility = 'hidden';
    document.getElementsByClassName("trailer-sheep-imgs")[0].style.visibility = 'visible';
    sheepCount++;
    if(sheepCount === 6){
        terminate()
    }
}

function terminate(){
    document.getElementById("end-menu").style.visibility = 'visible';
    score()
}

function score(){
    endTime = Date.now();
    let yourTime = Math.floor(((endTime - startTime) / 1000) * 10) / 10;
    document.getElementById("score-span").innerHTML = yourTime;
}

function restart (){
    location.reload()
}