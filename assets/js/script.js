
function start(){
    // add sheep to field
    var startTime = currentTime;
    var SheepCount = 0;
};

function clickSheepOne (){
    // remove sheepOne from field-div
    // add sheepOne to tractor-div
    SheepCount++;
    if (SheepCount = 6){
        Terminate()
    };
};

function clickSheepTwo (){
    // remove sheepTwo from field-div
    // add sheepTwo to tractor-div
    SheepCount++;
    if (SheepCount = 6){
        Terminate()
    };
};

function clickSheepThree (){
    // remove sheepThree from field-div
    // add sheepThree to tractor-div
    SheepCount++;
    if (SheepCount = 6){
        Terminate()
    };
};

function clickSheepFour (){
    // remove sheepFour from field-div
    // add sheepFour to tractor-div
    SheepCount++;
    if (SheepCount = 6){
        Terminate()
    };
};

function clickSheepFive (){
    // remove sheepFive from field-div
    // add sheepFive to tractor-div
    SheepCount++;
    if (SheepCount = 6){
        Terminate()
    };
};

function clickSheepSix (){
    // remove sheepSix from field-div
    // add sheepSix to tractor-div
    SheepCount++;
    if (SheepCount = 6){
        Terminate()
    };
};

function Terminate (){
    document.getElementById("field-div").innerHTML =`
        <h2>well done!</h2>
        <p>your time was:<span id="score-span"></span></p>
        <button onclick="restart()">Restart</button>`;
   score();
}

function score(){
    var endTime = currentTime
    var time = endTime - startTime
    document.getElementById("score-span").innerHTML = `${time} seconds!`

};

function restart(){
    //reload page
};