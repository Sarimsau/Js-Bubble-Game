// making bubbles
function makeBubble() {
    // looping the bubbles 
    var bubbles = '';

    for (var i = 1; i <= 133; i++) {
        var randomNum = Math.floor(Math.random() * 10)
        bubbles += `  <div class="bubble flexCenter">${randomNum}</div>`
    }

    document.querySelector('#panel-bottom').innerHTML = bubbles
}


var newHit ;
//getting new hit
function getNewHit(){
    newHit = Math.floor(Math.random()*10)
   document.querySelector('#hitVal').textContent = newHit

}

// Increasing score
var score = 0
function increaseScore(){
    score+= 10
    document.querySelector('#scoreVal').textContent = score
}

//making timer
var timer = 60;
function runTimer() {

    var timerInt =  setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector('#timerVal').textContent = timer;
        }
        else{
            clearInterval(timerInt)
            document.querySelector('#panel-bottom').innerHTML= `<h1> Your Score is ${score}</h1>`
        }

    }, 1000);


}

document.querySelector('#panel-bottom').addEventListener('click',function(dets){
    clickedNum  = Number(dets.target.textContent)
    if(clickedNum == newHit){
        increaseScore()
        makeBubble()
        getNewHit()
    }
}) 

makeBubble()
runTimer()
getNewHit()