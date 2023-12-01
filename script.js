
sonicLocation = {
    top: 1,
    left: 2
};


function move(left, top){
  let sonicElm = document.querySelector ("#sonic-box");
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












function setRandomRing(){
    let sonicRing = document.querySelector("#ring-box");
    sonicRing.style.left = Math.random() * 450 + "px";
    sonicRing.style.top = Math.random() * 450 + "px";
}
setRandomRing();
