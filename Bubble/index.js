var timer = 60;
var score = 0;
var hitrn=0;
function makeBubble() {
    var clutter = "";
    for (var index = 1; index <= 126; index++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble"><h2>${rn}</h2></div>`

    }

    document.querySelector("#pbtm").innerHTML = clutter;
    console.log(clutter)
}
function runTimer(){
    var timerint = setInterval(function () {
        if(timer>0){
         timer--;
         document.querySelector("#timerval").textContent = timer;
        }
        else{
         clearInterval(timerint);
         document.querySelector("#pbtm").innerHTML = `<h1 id=gameover>GAME OVER</h1>`
        }
     }, 1000);
};
function hitval(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}
function scoreAdd(){
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}


document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickedNum = (Number(dets.target.textContent));
    if(hitrn === clickedNum){
        scoreAdd();
        makeBubble();
        hitval();
    }
});












makeBubble();
runTimer();
hitval();
