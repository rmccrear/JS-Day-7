
sonicLocation = {
    top: 0,
    left: 1
};

let sonicElm = document.querySelector ("#sonic-box");
// DRY 
// Dont Repeat Yourself
function move(left, top){
  sonicElm.style.left = left*100 + 'px';
  sonicElm.style.top = top*100 + 'px';
}

move(sonicLocation.left, sonicLocation.top);

function moveLeft(){
    sonicLocation.left--; // subtract 1
    move(sonicLocation.left, sonicLocation.top);
}
function moveRight(){
    sonicLocation.left++; // add 1
    move(sonicLocation.left, sonicLocation.top);
}
function moveDown(){
    sonicLocation.top++; // add 1
    move(sonicLocation.left, sonicLocation.top);
}
function moveUp(){
    sonicLocation.top--; // subtract 1
    move(sonicLocation.left, sonicLocation.top);
}








document.addEventListener("keydown", function(event){
    if(event.key == "ArrowLeft"){
        moveLeft();
    } else if (event.key == "ArrowDown"){
        moveDown();
    } else if (event.key == "ArrowUp"){
        moveUp();
    } else if (event.key == "ArrowRight"){
        moveRight();
    }
});
let sonicRing = document.querySelector("#ring-box");
function setRandomRing(){
    sonicRing.style.left = Math.random() * 450 + "px";
    sonicRing.style.top = Math.random() * 450 + "px";
}
let pointsShown = document.querySelector("#points");
let isAlive, points;
isAlive = true;
points = 0;
while (isAlive){
    if(((sonicELm.left + 25)==sonicRing.left)&&((sonicElm.top+25)==sonicRing.top)){
        points++;
        setRandomRing();
        pointsShown.inner
    }
}
setRandomRing();
