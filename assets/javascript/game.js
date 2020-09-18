/*
Kenzie Academy Sports Game Assessment
Student: Jeff Gourlay
*/

/*
Constants and variables
*/
let btnLeftButton = document.querySelector('#teamone-shoot-button');
const btnResetButton = document.querySelector('#reset-button');
const btnRightButton = document.querySelector('#teamtwo-shoot-button');

let nRandomShot = 0;
let nResetCount = 0;
let nTeamOneGoalCount = 0;
let nTeamOneShotCount = 0;
let nTeamTwoGoalCount = 0;
let nTeamTwoShotCount = 0;
let spanLeftScore = document.getElementById("teamone-numgoals");
let spanLeftShots = document.getElementById("teamone-numshots");
let spanResets = document.getElementById("num-resets");
let spanRightScore = document.getElementById("teamtwo-numgoals");
let spanRightShots = document.getElementById("teamtwo-numshots");

/*
Event listeners
*/
btnLeftButton.addEventListener('click', function() {
    nRandomShot = Math.random();
    // 0 to .49 is a goal
    if (nRandomShot < .5)
    {
        nTeamOneGoalCount++;
        spanLeftScore.innerHTML = nTeamOneGoalCount;
    }
    // Hit or miss, increase shot count
    nTeamOneShotCount++;
    spanLeftShots.innerHTML = nTeamOneShotCount; 
    // disable team one button
    btnLeftButton.disabled = true;
    // enable team two button
    btnRightButton.disabled = false;
});

btnRightButton.addEventListener('click', function() {
    nRandomShot = Math.random();
    // 0 to .49 is a goal
    if (nRandomShot < .5)
    {
        nTeamTwoGoalCount++;
        spanRightScore.innerHTML = nTeamTwoGoalCount;
    }
    // Hit or miss, increase shot count
    nTeamTwoShotCount++;
    spanRightShots.innerHTML = nTeamTwoShotCount;
    // ensable team one button
    btnLeftButton.disabled = false;
    // disable team two button
    btnRightButton.disabled = true;
});

btnResetButton.addEventListener('click', function
() {
    if (nTeamOneGoalCount > nTeamTwoGoalCount)
    {
        alert("Team 1 wins " + nTeamOneGoalCount + " to " + nTeamTwoGoalCount);
    }
    else if (nTeamTwoGoalCount > nTeamOneGoalCount)
    {
        alert("Team 2 wins " + nTeamTwoGoalCount + " to " + nTeamOneGoalCount);
    }
    else
    {
        alert("the score is tied " + nTeamOneGoalCount + " to " + nTeamTwoGoalCount);
    }

    // Increment the reset counter
    nResetCount++;
    spanResets.innerHTML = nResetCount;

    // Reset teh goal and shot counters
    nTeamOneGoalCount = 0;
    nTeamOneShotCount = 0;
    nTeamTwoGoalCount = 0;
    nTeamTwoShotCount = 0;
    spanLeftScore.innerHTML = nTeamOneGoalCount;
    spanLeftShots.innerHTML = nTeamOneShotCount;
    spanRightScore.innerHTML = nTeamTwoGoalCount;
    spanRightShots.innerHTML = nTeamTwoShotCount;
    // ensable both team buttons
    btnLeftButton.disabled = false;
    btnRightButton.disabled = false;
});