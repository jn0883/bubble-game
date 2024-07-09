var clutter = "";
var timerval = 61;
var score = 0;
var hitval = 0;

function makeBubble() {
    for (var i = 1; i <= 66; i++) {
        var random = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${random}</div>`
    }
    document.querySelector(".bottompart").innerHTML = clutter;
}

function hit(){
    hitval = Math.floor(Math.random() * 10);
    document.querySelector(".hit").textContent = hitval;
}


function increasescore(){
    score+=10;
    document.querySelector(".score").textContent = score;
}

function timer() {
    var interval = setInterval(() => {
        if (timerval > 0) {
            timerval--;
            document.querySelector(".timer").textContent = timerval;
        }
        else {
            clearInterval(interval);
            document.querySelector(".bottompart").innerHTML = "<h2>GAME OVER</h2>";
        }
    }, 1000);
}

function mainfunction(){
    document.querySelector(".bottompart").addEventListener("click",function(dets){
        var selected = Number(dets.target.textContent);
        if(selected === hitval){
            increasescore();
            makeBubble();
            hit();
        }
    }
    )
}

document.querySelector(".startbutton").addEventListener("click",function(){
    mainfunction();
    timer();
    increasescore();
    makeBubble();
    hit();
})
