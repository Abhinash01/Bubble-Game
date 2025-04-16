var timer = 5;
var score = 0;
var hitrn = 0;

function makeBubble()
{ 
let circle = "";
for(let i = 1;i<=184;i++){
    circle += `<div class="circle">${Math.round(Math.random()*10)}</div>`
}
document.querySelector('.pandwn').innerHTML = circle;
}

function runTimer(){
    var interTimer = setInterval(function(){
        if(timer > 0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(interTimer);
            document.querySelector('.pandwn').innerHTML = `
        <div style="text-align: center; color: red;">
            <h1>Game Over</h1>
            <h2>Your Total Score: ${score}</h2>
        </div>
    `;

        }
    }, 1000);
}

function getNewHit(){
    hitrn = Math.round(Math.random()*10);
    document.querySelector('#newhit').textContent = hitrn;
}

function updateScore(){
    score+=10;
    document.querySelector('#updscr').textContent = score;
}

document.querySelector('.pandwn').addEventListener("click", function(dets){
    var clickedNum = (Number(dets.target.textContent))
    if(clickedNum === hitrn){
        updateScore();
        makeBubble();
        getNewHit();

    }
})


runTimer();
makeBubble();
getNewHit();

