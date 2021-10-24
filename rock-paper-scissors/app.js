"use strict";
var ROCK = "rock";
var PAPER = "paper";
var SCISSORS = "scissors";
function bootUp(time) {
    loading(time);
    setTimeout(function () {
        document.getElementById("result").innerHTML = "Choose one below";
    }, time);
}
function play(select) {
    switch (select) {
        case ROCK:
            document.getElementById("player").innerHTML = "🔨";
            break;
        case PAPER:
            document.getElementById("player").innerHTML = "📃";
            break;
        case SCISSORS:
            document.getElementById("player").innerHTML = "✂️";
            break;
    }
    if (getMode() === "NORMAL") {
        getResult(select, randomChoice());
    }
    else {
        easyMode(select);
    }
}
function randomChoice() {
    var randomResult = Math.floor(Math.random() * 3);
    return [ROCK, PAPER, SCISSORS][randomResult];
}
function getResult(player, enemy) {
    loading(300);
    thinking();
    setTimeout(function () {
        switch (enemy) {
            case ROCK:
                document.getElementById("enemy").innerHTML = "🔨";
                break;
            case PAPER:
                document.getElementById("enemy").innerHTML = "📃";
                break;
            case SCISSORS:
                document.getElementById("enemy").innerHTML = "✂️";
                break;
        }
        if (player === enemy) {
            playerDraw();
        }
        else if (player === ROCK) {
            if (enemy === SCISSORS) {
                playerWin();
            }
            else {
                playerLose();
            }
        }
        else if (player === PAPER) {
            if (enemy === ROCK) {
                playerWin();
            }
            else {
                playerLose();
            }
        }
        else if (player === SCISSORS) {
            if (enemy === PAPER) {
                playerWin();
            }
            else {
                playerLose();
            }
        }
    }, 1000);
}
function playerWin() {
    document.getElementById("result").innerHTML = "✨ WIN ✨";
}
function playerLose() {
    document.getElementById("result").innerHTML = "LOSE";
}
function playerDraw() {
    document.getElementById("result").innerHTML = "DRAW";
}
// Thinking...
function thinking() {
    document.getElementById("result").innerHTML = "Thinking...";
    document.getElementById("enemy").innerHTML = "";
}
// bottom-right loading svg
function loading(time) {
    document.getElementById("loader").style.opacity = "100";
    setTimeout(function () {
        document.getElementById("loader").style.opacity = "0";
    }, time);
}
// sidebar
var sidebar = false;
function toggleSidebar() {
    sidebar = !sidebar;
    if (sidebar) {
        document.getElementById("sidebar").style.width = "30%";
    }
    else {
        document.getElementById("sidebar").style.width = "0";
    }
}
// CHEAT SCRIPT
var godMode = false;
addEventListener('keyup', function (e) {
    if (e.code === "KeyE") {
        enableGodMode();
    }
    else if (e.code === "KeyD") {
        disableGodMode();
    }
});
function enableGodMode() {
    loading(1000);
    godMode = true;
}
function disableGodMode() {
    loading(1000);
    godMode = false;
}
function getMode() {
    return godMode ? "GOD" : "NORMAL";
}
function easyMode(select) {
    switch (select) {
        case ROCK:
            getResult(ROCK, PAPER);
            break;
        case PAPER:
            getResult(PAPER, SCISSORS);
            break;
        case SCISSORS:
            getResult(SCISSORS, ROCK);
            break;
    }
}
